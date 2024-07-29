// order.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ProductItemEntity } from 'src/product/db/product-item.entity';

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn()
      id: number;

  @Column()
      usedId: number;

  @Column()
      date: Date;

  @Column('simple-array')
      products: ProductItemEntity[];

  @Column()
      totalPrice: number;
}
