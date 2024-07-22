import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './db/product.entity';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './db/user.entity';
import { CategoryEntity } from './db/category.entity';
import { AdminEntity } from './db/admin.entity';
import { OrderEntity } from './db/order.entity';
import { PasswordEntity } from './db/password.entity';
import { ProductItemEntity } from './db/product-item.entity';
import { SupportHistoryEntity } from './db/support-history.entity';


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
    TypeOrmModule.forFeature([UserEntity, ProductEntity, CategoryEntity, AdminEntity, OrderEntity, PasswordEntity, ProductItemEntity, SupportHistoryEntity])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}