// product-item.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ProductItemEntity {
  @PrimaryGeneratedColumn()
  productId: number;

  @Column()
  quantity: number;

}
