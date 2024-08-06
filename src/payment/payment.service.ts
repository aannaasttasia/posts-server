import { ConflictException, Injectable } from '@nestjs/common';
import { PaymentBodyDto } from './payment-body.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from 'src/order/db/order.entity';
import { Repository } from 'typeorm';
import { SuccessDto } from 'src/common/dto/success.dto';
import { UserEntity } from 'src/user/db/user.entity';
import { ProductEntity } from 'src/product/db/product.entity';

@Injectable()
export class PaymentService {
    constructor(
        @InjectRepository(OrderEntity)
        private orderRepository: Repository<OrderEntity>,

        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,

        @InjectRepository(ProductEntity)
        private productRepository: Repository<ProductEntity>,
    ){}

    public async payForProducts(paymentBody: PaymentBodyDto): Promise<SuccessDto>{
        const user = await this.userRepository.findOne({where: {id : paymentBody.userId}});
        let totalPrice = 0;
        console.log(paymentBody.products);
        for (const p of paymentBody.products) {
            console.log(p.id);
            const productItem = await this.productRepository.findOne({ where: { id: p.id } });
            console.log(productItem.price);
            if (!productItem) {
                throw new ConflictException(`Product with ID ${p.id} not found`);
            }
    
            totalPrice += productItem.price * p.quantity;
        }
        if(user.balance < totalPrice){
            console.log('user', user.balance);
            console.log('total', totalPrice);
            throw new ConflictException('There are insufficient funds in your balance');
        }
        user.balance -= totalPrice;
        await this.userRepository.save(user);

        const orderEntity = new OrderEntity();
        orderEntity.date = new Date();
        orderEntity.totalPrice = totalPrice;
        orderEntity.products = paymentBody.products;
        orderEntity.userId = user.id;
        await this.orderRepository.save(orderEntity);

        return new SuccessDto();
    }
    
}
