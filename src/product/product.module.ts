import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './db/product.entity';
import { CategoryEntity } from './db/category.entity';
import { ProductItemEntity } from './db/product-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity, CategoryEntity, ProductItemEntity])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
