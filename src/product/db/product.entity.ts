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
    price: number;

  @Column({ nullable: true })
    category: string;

  @Column()
    thumbnail: string;
}
