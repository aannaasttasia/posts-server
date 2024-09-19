// product-item.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ProductItemEntity {
  @PrimaryGeneratedColumn()
      id: number;

  @Column()
      quantity: number;
}
