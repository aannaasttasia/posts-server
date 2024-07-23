export class ProductPreviewDto{
    id: number;
    title: string;
    description: string;
    price: BigInt;
    category: string;
    thumbnail: string;
}

export class ProductsDto{
    offset: number;
    totalCount: number;
    products: ProductPreviewDto[];
}