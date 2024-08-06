import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './db/order.entity';
import { Repository } from 'typeorm';
import { OrderDto } from './dto/order.dto';
import { ProductItemDto } from 'src/product/dto/product-item.dto';

@Injectable()
export class OrderService {
    constructor(
    @InjectRepository(OrderEntity)
    private orderRepository: Repository<OrderEntity>,
    ) {}

    public async getOrders(userId:number): Promise<OrderDto[]> {
        return (await this.orderRepository.find({where: {userId}})).map((o) => ({
            id: o.id,
            userId: o.userId,
            totalPrice: o.totalPrice,
            products: o.products as ProductItemDto[],
            date: o.date,
        }));
    }
}
