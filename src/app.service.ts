import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './db/product.entity';
import { NewProductDto } from './dto/new-product.dto';
import { SuccessDto } from './dto/success.dto';
import { UserEntity } from './db/user.entity';
import { NewUserDto } from './dto/new-user.dto';
import { CategoryEntity } from './db/category.entity';
import { NewCategoryDto } from './dto/new-category.dto';
import { UserDto } from './dto/user.dto';
import { CategoryDto } from './dto/category.dto';
import { ProductDto } from './dto/product.dto';
import { AdminEntity } from './db/admin.entity';
import { OrderEntity } from './db/order.entity';
import { ProductItemEntity } from './db/product-item.entity';
import { PasswordEntity } from './db/password.entity';
import { SupportHistoryEntity } from './db/support-history.entity';
import { NewAdminDto } from './dto/new-admin.dto';
import { NewOrderDto } from './dto/new-order.dto';
import { PasswordDto } from './dto/password.dto';
import { NewPasswordDto } from './dto/new-password.dto';
import { NewProductItemDto } from './dto/new-product-item.dto';
import { NewSupportHistoryDto } from './dto/new-support-history.dto';
import { AdminDto } from './dto/admin.dto';
import { OrderDto } from './dto/order.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AppService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,

    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,

    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,

    @InjectRepository(AdminEntity)
    private adminRepository: Repository<AdminEntity>,

    @InjectRepository(OrderEntity)
    private orderRepository: Repository<OrderEntity>,

    @InjectRepository(PasswordEntity)
    private passwordRepository: Repository<PasswordEntity>,

    @InjectRepository(ProductItemEntity)
    private productItemRepository: Repository<ProductItemEntity>,

    @InjectRepository(SupportHistoryEntity)
    private supportHistoryRepository: Repository<SupportHistoryEntity>,
  ) {}


  // методи для користувачів

  public async newUser(user: NewUserDto): Promise<SuccessDto>{
    const userEntity = new UserEntity()
    userEntity.address = user.address
    userEntity.email = user.email
    userEntity.name = user.name
    userEntity.phoneNumber = user.phoneNumber
    userEntity.surname = user.surname
    await this.userRepository.save(userEntity)

    return new SuccessDto()
  }

  public async getUsers(): Promise<UserDto[]>{
    console.log("here")
    return (await this.userRepository.find()).map(u=>({
        id: u.id,
        name: u.name,
        surname: u.surname,
        address: u.address,
        phoneNumber: u.phoneNumber,
        email: u.email,
        balance: u.balance
    }))
  }

  public async getUser(id: number): Promise<UserDto>{
    return await this.userRepository.findOne({where: { id }})
  }

  public async deleteUser(id: number): Promise<SuccessDto>{
    await this.userRepository.delete(id)
    return new SuccessDto()
  }

  // методи для категорій

  public async newCategory(category: NewCategoryDto): Promise<SuccessDto>{
    const categoryEntity = new CategoryEntity()
    categoryEntity.name = category.name
    await this.categoryRepository.save(categoryEntity)

    return new SuccessDto()
  }

  public async getCategories(): Promise<CategoryDto[]>{
    return (await this.categoryRepository.find()).map(c=>({
      id: c.id,
      name: c.name
    }))
  }

  public async getCategory(id: number): Promise<CategoryDto>{
    return await this.categoryRepository.findOne({where: { id }})
  }

  // методи для продуктів

  public async newProduct(product: NewProductDto): Promise<SuccessDto>{
    const productEntity = new ProductEntity()
    productEntity.category = product.category
    productEntity.description = product.description
    productEntity.price = product.price
    productEntity.thumbnail = product.thumbnail
    productEntity.title = product.title
    await this.productRepository.save(productEntity)

    return new SuccessDto()
  }

  public async getProducts(): Promise<ProductDto[]>{
    return (await this.productRepository.find()).map(p=>({
      id: p.id,
      title: p.title,
      description: p.description,
      price: p.price,
      category: p.category,
      thumbnail: p.thumbnail
    }))
  }

  public async getProduct(id: number): Promise<ProductDto>{
    return await this.productRepository.findOne({where: { id }})
  }

  public async deleteProduct(id: number): Promise<SuccessDto>{
    await this.productRepository.delete(id)
    return new SuccessDto()
  }

  // методи для адмінів
  
  public async newAdmin(admin: NewAdminDto): Promise<SuccessDto>{
    const adminEntity = new AdminEntity()
    adminEntity.email = admin.email
    adminEntity.name = admin.name
    adminEntity.surname = admin.surname
    await this.adminRepository.save(adminEntity)
    return new SuccessDto()
  }

  public async getAdmins(): Promise<AdminDto[]>{
    return (await this.adminRepository.find()).map(a=>({
        id: a.id,
        name: a.name,
        surname: a.surname,
        email: a.email
    }))
  }
  
  // методи для історії замовлень 

  public async newOrder(order: NewOrderDto): Promise<SuccessDto>{
    const orderEntity = new OrderEntity()
    orderEntity.date = order.date
    orderEntity.totalPrice = order.totalPrice
    orderEntity.products = order.products
    orderEntity.usedId = order.userId
    await this.orderRepository.save(orderEntity)
    return new SuccessDto()
  }

  public async getOrders(): Promise<OrderDto[]>{
    return (await this.orderRepository.find()).map(o=>({
        id: o.id,
        userId: o.usedId,
        totalPrice: o.totalPrice,
        products: o.products,
        date: o.date,
    }))
  }


  // методи для паролів

  public async newPassword(password: NewPasswordDto): Promise<SuccessDto>{
    const passwordEntity = new PasswordEntity()
    passwordEntity.email = password.email
    passwordEntity.isAdmin = password.isAdmin
    passwordEntity.userId = password.userId

    const salt = await bcrypt.genSalt();
    passwordEntity.passwordHash = await bcrypt.hash(password.passwordHash, salt);

    await this.passwordRepository.save(passwordEntity)
    return new SuccessDto()
  }

  public async getPassword(userId: number): Promise<PasswordDto>{
    return await this.passwordRepository.findOne({where: {userId}})
  }

  // методи для кількості продуктів в кошику

  public async newProductItem(item: NewProductItemDto): Promise<SuccessDto>{
    const productItemEntity = new ProductItemEntity()
    productItemEntity.productId = item.productId
    productItemEntity.quantity = item.quantity
    await this.productItemRepository.save(productItemEntity)
    return new SuccessDto()
  }

  public async getProductItem(){
    
  }

  // методи для підтримки

  public async newSupportHistory(support: NewSupportHistoryDto): Promise<SuccessDto>{
    const supportHistoryEntity = new SupportHistoryEntity()
    supportHistoryEntity.date = support.date
    supportHistoryEntity.description = support.description
    supportHistoryEntity.email = support.email
    supportHistoryEntity.userId = support.userId
    await this.supportHistoryRepository.save(supportHistoryEntity)
    return new SuccessDto()
  }

}
