export class ProductPreviewDto {
    id: number;
    title: string;
    description: string;
    price: bigint;
    category: string;
    thumbnail: string;
}

export class ProductsDto {
    offset: number;
    totalCount: number;
    products: ProductPreviewDto[];
}
