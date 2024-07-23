import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { NewOrderDto } from './dto/new-order.dto';
import { SuccessDto } from 'src/common/dto/success.dto';
import { OrderDto } from './dto/order.dto';

@Controller()
export class OrdersController {
    constructor(private readonly ordersService: OrdersService){}

    // методи для історії замовлень 

    @Post('order/new')
    newOrder(@Body() body: NewOrderDto): Promise<SuccessDto>{
        return this.ordersService.newOrder(body)
    }

    @Get('orders')
    getOrders(): Promise<OrderDto[]>{
        return this.ordersService.getOrders()
    }

}
