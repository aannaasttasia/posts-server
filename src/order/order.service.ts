import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './db/order.entity';
import { Repository } from 'typeorm';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class OrderService {
    constructor(
    @InjectRepository(OrderEntity)
    private orderRepository: Repository<OrderEntity>,
    ) {}

    public async getOrders(): Promise<OrderDto[]> {
        return (await this.orderRepository.find()).map((o) => ({
            id: o.id,
            userId: o.usedId,
            totalPrice: o.totalPrice,
            products: o.products,
            date: o.date,
        }));
    }
}
