import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './db/order.entity';

@Module({
  imports:[TypeOrmModule.forFeature([OrderEntity])],
  providers: [OrdersService],
  controllers: [OrdersController]
})
export class OrdersModule {}
