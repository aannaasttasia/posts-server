// product.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: string;

  @Column('decimal', { precision: 5, scale: 2 })
  discountPercentage: number;

  @Column('decimal', { precision: 3, scale: 2 })
  rating: number;

  @Column()
  stock: number;

  @Column({ nullable: true })
  brand: string;

  @Column({ nullable: true })
  category: string;

  @Column()
  thumbnail: string;
}
