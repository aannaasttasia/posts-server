import { IsDate } from 'class-validator';
import { ProductItemDto } from 'src/product/dto/product-item.dto';

export class NewOrderDto {
    userId: number;
    totalPrice: number;
    products: ProductItemDto[];
  @IsDate()
      date: Date;
}
