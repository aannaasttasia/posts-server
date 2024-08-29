import { Body, Controller, Param, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentBodyDto } from './payment-body.dto';
import { SuccessDto } from 'src/common/dto/success.dto';

@Controller('payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) {}

    @Post(':userId')
    payForProducts(@Param('userId') userId: number, @Body() body: PaymentBodyDto ): Promise<SuccessDto>{
        body.userId = userId; 
        return this.paymentService.payForProducts(body);
    }
    @Post('eth/:userId')
    payForProductsInEth(@Param('userId') userId: number, @Body() body: PaymentBodyDto ): Promise<SuccessDto>{
        body.userId = userId; 
        return this.paymentService.payForProductsInEth(body);
    }
}
