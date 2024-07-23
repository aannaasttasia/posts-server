import { Module } from '@nestjs/common';
import { PasswordsController } from './passwords.controller';
import { PasswordsService } from './passwords.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasswordEntity } from './db/password.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PasswordEntity])],
  controllers: [PasswordsController],
  providers: [PasswordsService]
})
export class PasswordsModule {}
