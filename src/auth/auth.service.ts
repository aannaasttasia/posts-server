import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { PasswordEntity } from 'src/user/db/password.entity';
import { Repository } from 'typeorm';
import { EncryptionService } from 'src/encryption/encryption.service';
import { PasswordDto } from 'src/user/dto/password.dto';


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(PasswordEntity)
        private passwordRepository: Repository<PasswordEntity>,

        private readonly encryptionService: EncryptionService
    ) {}

    async signIn(userId: number, pass: string): Promise<any> {
        const user = await this.passwordRepository.findOne({where: {userId}});
        if (!user) {
            throw new UnauthorizedException('User not found');
        }
        if (!await this.encryptionService.comparePasswords(pass, user.passwordHash)) {
            throw new UnauthorizedException('Invalid credentials');
        }
        const { passwordHash, ...result } = user;
        return result;
    }

    public async getPasswords(): Promise<PasswordDto[]>{
        return (await this.passwordRepository.find()).map(p=>({
            userId: p.userId,
            email: p.email,
            passwordHash: p.passwordHash,
            isAdmin: p.isAdmin
        }))
    }
    
    
}
