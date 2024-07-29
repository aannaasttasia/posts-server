import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { OrderModule } from 'src/order/order.module';

@Module({
  imports:[OrderModule],
  providers: [PaymentService]
})
export class PaymentModule {}
