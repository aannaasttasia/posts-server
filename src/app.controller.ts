import { Body, Controller, Delete, Get, Post, Query, Put, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { SuccessDto } from './dto/success.dto';
import { NewProductDto } from './dto/new-product.dto';
import { NewUserDto } from './dto/new-user.dto';
import { UserDto } from './dto/user.dto';
import { NewCategoryDto } from './dto/new-category.dto';
import { ProductDto } from './dto/product.dto';
import { CategoryDto } from './dto/category.dto';
import { NewAdminDto } from './dto/new-admin.dto';
import { NewOrderDto } from './dto/new-order.dto';
import { NewPasswordDto } from './dto/new-password.dto';
import { NewProductItemDto } from './dto/new-product-item.dto';
import { NewSupportHistoryDto } from './dto/new-support-history.dto';
import { AdminDto } from './dto/admin.dto';
import { OrderDto } from './dto/order.dto';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    // методи для користувачів

    @Post('user/new')
    newUser(@Body() body: NewUserDto): Promise<SuccessDto>{
        console.log(body)
        return this.appService.newUser(body)
    }

    @Get('users')
    getUsers(): Promise<UserDto[]>{
        return this.appService.getUsers()
    }

    @Get('user/:id')
    getUser(@Param() params: {id: number}): Promise<UserDto>{
        return this.appService.getUser(params.id)
    }

    @Delete('user/:id')
    deleteUser(@Param('id') id: number): Promise<SuccessDto> {
        return this.appService.deleteUser(id);
    }

    
    // методи для категорій

    @Post('category/new')
    newCategory(@Body() body: NewCategoryDto): Promise<SuccessDto>{
        return this.appService.newCategory(body)
    }

    @Get('categories')
    getCategories(): Promise<CategoryDto[]>{
        return this.appService.getCategories()
    }

    @Get('category/:id')
    getCategory(@Param() params: {id: number}): Promise<CategoryDto>{
        return this.appService.getCategory(params.id)
    }


    // методи для продуктів

    @Post('product/new')
    newProduct(@Body() body: NewProductDto): Promise<SuccessDto>{
        return this.appService.newProduct(body)
    }

    @Get('products')
    getProducts(): Promise<ProductDto[]>{
        return this.appService.getProducts()
    }

    @Get('product/:id')
    getProduct(@Param() params: {id: number}): Promise<ProductDto>{
        return this.appService.getProduct(params.id)
    }

    @Delete('product/:id')
    deleteProduct(@Param('id') id: number): Promise<SuccessDto>{
        return this.appService.deleteProduct(id)
    }

    // методи для адмінів

    @Post('admin/new')
    newAdmin(@Body() body: NewAdminDto): Promise<SuccessDto>{
        return this.appService.newAdmin(body)
    }

    @Get('admins')
    getAdmins(): Promise<AdminDto[]>{
        return this.appService.getAdmins()
    }
    
    
    // методи для історії замовлень 

    @Post('order/new')
    newOrder(@Body() body: NewOrderDto): Promise<SuccessDto>{
        return this.appService.newOrder(body)
    }

    @Get('orders')
    getOrders(): Promise<OrderDto[]>{
        return this.appService.getOrders()
    }


    // методи для паролів

    @Post('password/new')
    newPassword(@Body() body: NewPasswordDto): Promise<SuccessDto>{
        return this.appService.newPassword(body)
    }

    @Get('password')
    getPassword(@Query() params: {userId: number}){
        return this.appService.getPassword(params.userId)
    }


    // методи для кількості продуктів в кошику

    @Post('productItem/new')
    newProductItem(@Body() body: NewProductItemDto): Promise<SuccessDto>{
        return this.appService.newProductItem(body)
    }

    
    // методи для підтримки

    @Post('supportHistory/new')
    newSupportHistory(@Body() body: NewSupportHistoryDto): Promise<SuccessDto>{
        return this.appService.newSupportHistory(body)
    }


}

 // @Get('user/:id')
  // getUser(@Param('id') id: number): Promise<UserDto>{
  //   return this.appService.getUser(id)
  // }
