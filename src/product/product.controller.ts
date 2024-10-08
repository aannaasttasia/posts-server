import {
    Body,
    Controller,
    Delete,
    Param,
    Post,
    Get,
    UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { NewCategoryDto } from './dto/new-category.dto';
import { SuccessDto } from 'src/common/dto/success.dto';
import { CategoryDto } from './dto/category.dto';
import { NewProductDto } from './dto/new-product.dto';
import { ProductDto } from './dto/product.dto';
import { ProductItemDto } from './dto/product-item.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller()
export class ProductController {
    constructor(private readonly productsService: ProductService) {}

    // category methods

  @Post('category/new')
  @UseGuards(AuthGuard)
    newCategory(@Body() body: NewCategoryDto): Promise<SuccessDto> {
        return this.productsService.newCategory(body);
    }

  @Get('categories')
  getCategories(): Promise<CategoryDto[]> {
      return this.productsService.getCategories();
  }

  @Get('category/:id')
  getCategory(@Param() params: { id: number }): Promise<CategoryDto> {
      return this.productsService.getCategory(params.id);
  }

  // product methods

  @Post('product/new')
  @UseGuards(AuthGuard)
  newProduct(@Body() body: NewProductDto): Promise<SuccessDto> {
      return this.productsService.newProduct(body);
  }

  @Get('products')
  getProducts(): Promise<ProductDto[]> {
      return this.productsService.getProducts();
  }

  @Get('product/:id')
  getProduct(@Param() params: { id: number }): Promise<ProductDto> {
      return this.productsService.getProduct(params.id);
  }

  @Delete('product/:id')
  deleteProduct(@Param('id') id: number): Promise<SuccessDto> {
      return this.productsService.deleteProduct(id);
  }

  // product from the cart methods

  @Post('productItem/new')
  newProductItem(@Body() body: ProductItemDto): Promise<SuccessDto> {
      return this.productsService.newProductItem(body);
  }
}
