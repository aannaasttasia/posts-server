// user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  address: string;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;

  @Column('decimal', { precision: 10, scale: 2 })
  balance: string;
}
