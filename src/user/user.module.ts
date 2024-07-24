import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from './db/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasswordEntity } from './db/password.entity';
import { EncryptionModule } from 'src/encryption/encryption.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity,PasswordEntity]), EncryptionModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
