import { ProductDto } from "./product.dto";

export class OrderDto{
    id: number;
    userId: number;
    totalPrice: number;
    products: ProductDto[];
    date: Date;

}