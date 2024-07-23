import { Injectable } from '@nestjs/common';
import { PasswordEntity } from './db/password.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewPasswordDto } from './dto/new-password.dto';
import { SuccessDto } from 'src/common/dto/success.dto';
import { PasswordDto } from './dto/password.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class PasswordsService {
    constructor(
        @InjectRepository(PasswordEntity)
        private passwordRepository: Repository<PasswordEntity>
    ){}

    // методи для паролів

    public async newPassword(password: NewPasswordDto): Promise<SuccessDto>{
        const passwordEntity = new PasswordEntity()
        passwordEntity.email = password.email
        passwordEntity.isAdmin = password.isAdmin
        passwordEntity.userId = password.userId

        const salt = await bcrypt.genSalt();
        passwordEntity.passwordHash = await bcrypt.hash(password.passwordHash, salt);

        await this.passwordRepository.save(passwordEntity)
        return new SuccessDto()
    }

    public async getPassword(userId: number): Promise<PasswordDto>{
        return await this.passwordRepository.findOne({where: {userId}})
  }

}
