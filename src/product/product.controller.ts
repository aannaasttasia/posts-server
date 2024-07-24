import { Body, Controller, Delete, Param, Post, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { NewCategoryDto } from './dto/new-category.dto';
import { SuccessDto } from 'src/common/dto/success.dto';
import { CategoryDto } from './dto/category.dto';
import { NewProductDto } from './dto/new-product.dto';
import { ProductDto } from './dto/product.dto';
import { NewProductItemDto } from './dto/new-product-item.dto';

@Controller()
export class ProductController {
    constructor(private readonly productsService: ProductService) {}

    // category methods

    @Post('category/new')
    newCategory(@Body() body: NewCategoryDto): Promise<SuccessDto>{
        return this.productsService.newCategory(body)
    }

    @Get('categories')
    getCategories(): Promise<CategoryDto[]>{
        return this.productsService.getCategories()
    }

    @Get('category/:id')
    getCategory(@Param() params: {id: number}): Promise<CategoryDto>{
        return this.productsService.getCategory(params.id)
    }


    // product methods

    @Post('product/new')
    newProduct(@Body() body: NewProductDto): Promise<SuccessDto>{
        return this.productsService.newProduct(body)
    }

    @Get('products')
    getProducts(): Promise<ProductDto[]>{
        return this.productsService.getProducts()
    }

    @Get('product/:id')
    getProduct(@Param() params: {id: number}): Promise<ProductDto>{
        return this.productsService.getProduct(params.id)
    }

    @Delete('product/:id')
    deleteProduct(@Param('id') id: number): Promise<SuccessDto>{
        return this.productsService.deleteProduct(id)
    }


    // product from the cart methods

    @Post('productItem/new')
    newProductItem(@Body() body: NewProductItemDto): Promise<SuccessDto>{
        return this.productsService.newProductItem(body)
    }
}
