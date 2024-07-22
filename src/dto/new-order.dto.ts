import { IsDate } from "class-validator";
import { ProductDto } from "./product.dto";

export class NewOrderDto{
    userId: number;
    totalPrice: number;
    products: ProductDto[];
    @IsDate()
    date: Date;
}