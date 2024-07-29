import { ProductItemDto } from 'src/product/dto/product-item.dto';

export class PaymentBodyDto{
  userId: number;
  products: ProductItemDto[];
  totalPrice: number;
}