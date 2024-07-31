import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';

@Controller('order')
export class OrderController {
    constructor(private readonly ordersService: OrderService) {}

  @Get()
    getOrders(): Promise<OrderDto[]> {
        return this.ordersService.getOrders();
    }
}
