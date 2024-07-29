import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { NewOrderDto } from './dto/new-order.dto';
import { SuccessDto } from 'src/common/dto/success.dto';
import { OrderDto } from './dto/order.dto';

@Controller('order')
export class OrderController {
    constructor(private readonly ordersService: OrderService) {}

    // order methods

  @Post('new')
    newOrder(@Body() body: NewOrderDto): Promise<SuccessDto> {
        return this.ordersService.newOrder(body);
    }

  @Get()
  getOrders(): Promise<OrderDto[]> {
      return this.ordersService.getOrders();
  }
}
