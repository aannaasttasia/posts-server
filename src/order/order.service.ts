import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './db/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private orderRepository: Repository<OrderEntity>,
  ) {}

  // // order methods

  // public async newOrder(order: NewOrderDto): Promise<SuccessDto> {
  //   const orderEntity = new OrderEntity();
  //   orderEntity.date = order.date;
  //   orderEntity.totalPrice = order.totalPrice;
  //   orderEntity.products = order.products;
  //   orderEntity.usedId = order.userId;
  //   await this.orderRepository.save(orderEntity);
  //   return new SuccessDto();
  // }

  // public async getOrders(): Promise<OrderDto[]> {
  //   return (await this.orderRepository.find()).map((o) => ({
  //     id: o.id,
  //     userId: o.usedId,
  //     totalPrice: o.totalPrice,
  //     products: o.products,
  //     date: o.date,
  //   }));
  // }
}
