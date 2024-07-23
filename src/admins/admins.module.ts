import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './db/admin.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AdminEntity])],
  providers: [AdminsService],
  controllers: [AdminsController]
})
export class AdminsModule {}
