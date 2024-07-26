// order.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ProductEntity } from 'src/product/db/product.entity';

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usedId: number;

  @Column()
  date: Date;

  @Column('simple-array')
  products: ProductEntity[];

  @Column()
  totalPrice: number;
}
