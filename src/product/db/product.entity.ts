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
    price: bigint;

  @Column({ nullable: true })
    category: string;

  @Column()
    thumbnail: string;
}
