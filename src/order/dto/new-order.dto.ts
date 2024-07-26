import { IsDate } from 'class-validator';
import { ProductDto } from 'src/product/dto/product.dto';

export class NewOrderDto {
  userId: number;
  totalPrice: number;
  products: ProductDto[];
  @IsDate()
  date: Date;
}
