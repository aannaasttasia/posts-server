import { ProductItemDto } from 'src/product/dto/product-item.dto';

export class OrderDto {
    id: number;
    userId: number;
    totalPrice: number;
    products: ProductItemDto[];
    date: Date;
}
