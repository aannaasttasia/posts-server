import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/db/user.entity';
import { ProductEntity } from 'src/product/db/product.entity';
import { OrderEntity } from 'src/order/db/order.entity';
import { PaymentController } from './payment.controller';

@Module({
    imports:[TypeOrmModule.forFeature([OrderEntity, UserEntity, ProductEntity])],
    providers: [PaymentService],
    exports:[PaymentService],
    controllers: [PaymentController]
})
export class PaymentModule {}
