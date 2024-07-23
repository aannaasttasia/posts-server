import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './products/db/product.entity';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './users/db/user.entity';
import { CategoryEntity } from './products/db/category.entity';
import { AdminEntity } from './admins/db/admin.entity';
import { OrderEntity } from './orders/db/order.entity';
import { PasswordEntity } from './passwords/db/password.entity';
import { ProductItemEntity } from './products/db/product-item.entity';
import { SupportHistoryEntity } from './support-history/db/support-history.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { AdminsModule } from './admins/admins.module';
import { OrdersModule } from './orders/orders.module';
import { SupportHistoryModule } from './support-history/support-history.module';
import { PasswordsModule } from './passwords/passwords.module';



@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: +process.env.PORT,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [UserEntity, ProductEntity, CategoryEntity, AdminEntity, OrderEntity, PasswordEntity, ProductItemEntity, SupportHistoryEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserEntity, ProductEntity, CategoryEntity, AdminEntity, OrderEntity, PasswordEntity, ProductItemEntity, SupportHistoryEntity]),
    UsersModule,
    AuthModule,
    ProductsModule,
    AdminsModule,
    OrdersModule,
    SupportHistoryModule,
    PasswordsModule
  ],
  // controllers: [AppController,],
  // providers: [AppService],
})
export class AppModule {}