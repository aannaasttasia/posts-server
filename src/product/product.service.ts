import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './db/category.entity';
import { Repository } from 'typeorm';
import { ProductEntity } from './db/product.entity';
import { ProductItemEntity } from './db/product-item.entity';
import { NewCategoryDto } from './dto/new-category.dto';
import { SuccessDto } from 'src/common/dto/success.dto';
import { CategoryDto } from './dto/category.dto';
import { NewProductDto } from './dto/new-product.dto';
import { ProductDto } from './dto/product.dto';
import { ProductItemDto } from './dto/product-item.dto';

@Injectable()
export class ProductService {
    constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,

    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,

    @InjectRepository(ProductItemEntity)
    private productItemRepository: Repository<ProductItemEntity>,
    ) {}

    // category methods

    public async newCategory(category: NewCategoryDto): Promise<SuccessDto> {
        const categoryEntity = new CategoryEntity();
        categoryEntity.name = category.name;
        await this.categoryRepository.save(categoryEntity);

        return new SuccessDto();
    }

    public async getCategories(): Promise<CategoryDto[]> {
        return (await this.categoryRepository.find()).map((c) => ({
            id: c.id,
            name: c.name,
        }));
    }

    public async getCategory(id: number): Promise<CategoryDto> {
        return await this.categoryRepository.findOne({ where: { id } });
    }

    // product methods

    public async newProduct(product: NewProductDto): Promise<SuccessDto> {
        const productEntity = new ProductEntity();
        productEntity.categoryId = product.categoryId;
        productEntity.description = product.description;
        productEntity.price = product.price;
        productEntity.thumbnail = product.thumbnail;
        productEntity.title = product.title;
        await this.productRepository.save(productEntity);

        return new SuccessDto();
    }

    public async getProducts(): Promise<ProductDto[]> {
        return (await this.productRepository.find()).map((p) => ({
            id: p.id,
            title: p.title,
            description: p.description,
            price: p.price,
            categoryId: p.categoryId,
            thumbnail: p.thumbnail,
        }));
    }

    public async getProduct(id: number): Promise<ProductDto> {
        return await this.productRepository.findOne({ where: { id } });
    }

    public async getProductByCategory(categoryId: number): Promise<ProductDto[]> {
        const products = await this.productRepository.find({ where: { categoryId } });
    
        return products.map(p => ({
            id: p.id,
            title: p.title,
            description: p.description,
            price: p.price,
            categoryId: p.categoryId,
            thumbnail: p.thumbnail
        }));
    }
    

    public async deleteProduct(id: number): Promise<SuccessDto> {
        await this.productRepository.delete(id);
        return new SuccessDto();
    }

    // product from the cart methods

    public async newProductItem(item: ProductItemDto): Promise<SuccessDto> {
        const productItemEntity = new ProductItemEntity();
        productItemEntity.id = item.id;
        productItemEntity.quantity = item.quantity;
        await this.productItemRepository.save(productItemEntity);
        return new SuccessDto();
    }

    public async getProductItem() {}
}
