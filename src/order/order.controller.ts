import { Controller} from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly ordersService: OrderService) {}

  // order methods

  // @Post('new')
  // newOrder(@Body() body: NewOrderDto): Promise<SuccessDto> {
  //   return this.ordersService.newOrder(body);
  // }

  // @Get()
  // getOrders(): Promise<OrderDto[]> {
  //   return this.ordersService.getOrders();
  // }
}
