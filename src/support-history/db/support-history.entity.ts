// support-history.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SupportHistoryEntity {
  @PrimaryGeneratedColumn()
      id: number;

  @Column()
      userId: number;

  @Column()
      email: string;

  @Column()
      description: string;

  @Column()
      date: Date;
}
