import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasswordEntity } from 'src/auth/db/password.entity';
import { EncryptionModule } from 'src/encryption/encryption.module';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';

dotenv.config(); 

@Module({
    imports: [
        UserModule,
        TypeOrmModule.forFeature([PasswordEntity]),
        EncryptionModule,
        JwtModule.register({
            global: true,
            secret: process.env.SECRET,
            signOptions: { expiresIn: '360s' },
        }),
    ],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
