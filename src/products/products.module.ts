import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './db/product.entity';
import { CategoryEntity } from './db/category.entity';
import { ProductItemEntity } from './db/product-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity, CategoryEntity, ProductItemEntity])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
