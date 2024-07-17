import { Body, Controller, Delete, Get, Post, Query, Put, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { SuccessDto } from './dto/success.dto';
import { NewProductDto } from './dto/new-product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Методи для роботи з постами

  // @Get('posts')
  // getPosts(@Query() params: GetPostsQueryDto): Promise<PostsDto> {
  //   return this.appService.posts(params);
  // }

  // @Get('post')
  // getPost(@Query() params: {id: number}): Promise<PostDto> {
  //   return this.appService.post(params.id);
  // }

  // @Post('new')
  // newPost(@Body() body: NewPostDto): Promise<SuccessDto> {
  //   console.log(body);
  //   return this.appService.newPost(body);
  // }

  // @Delete('post/:id')
  // deletePost(@Param() params: {id: number}): Promise<SuccessDto> {
  //   return this.appService.delete(params.id);
  // }

  // @Post('update/:id')
  // updatePost(@Param() params: {id: number}, @Body() post: NewPostDto): Promise<SuccessDto> {
  //   console.log('here', post);
  //   return this.appService.put(post, params.id);
  // }

  // @Get('products')
  // getProducts(): Promise<ProductType[]> {
  //   return this.appService.getAllProducts();
  // }

  // @Get('product/:id')
  // getProduct(@Param('id') id: number): Promise<ProductType> {
  //   return this.appService.getProduct(id);
  // }

  // @Post('product/new')
  // addProduct(@Body() product: NewProductDto): Promise<SuccessDto> {
  //   return this.appService.addProduct(product);
  // }

  // @Put('product/:id')
  // updateProduct(@Param('id') id: number, @Body() product: NewProductDto): Promise<SuccessDto> {
  //   return this.appService.updateProduct(id, product);
  // }

  // @Delete('product/:id')
  // deleteProduct(@Param('id') id: number): Promise<SuccessDto> {
  //   return this.appService.deleteProduct(id);
  // }
}
