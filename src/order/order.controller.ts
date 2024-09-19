import { Controller, Get, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';

@Controller('order')
export class OrderController {
    constructor(private readonly ordersService: OrderService) {}

  @Get('/:userId')
    getOrders(@Param('userId') userId: number): Promise<OrderDto[]> {
        return this.ordersService.getOrders(userId);
    }
}
