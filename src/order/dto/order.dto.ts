import { ProductDto } from 'src/product/dto/product.dto';

export class OrderDto {
    id: number;
    userId: number;
    totalPrice: number;
    products: ProductDto[];
    date: Date;
}
