import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './db/admin.entity';
import { PasswordEntity } from 'src/auth/db/password.entity';
import { EncryptionModule } from 'src/encryption/encryption.module';
import { UserModule } from 'src/user/user.module';
import { UserEntity } from 'src/user/db/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AdminEntity, PasswordEntity, UserEntity]), EncryptionModule, UserModule],
  providers: [AdminService],
  controllers: [AdminController]
})
export class AdminModule {}
