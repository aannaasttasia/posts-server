import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminEntity } from './db/admin.entity';
import { Repository } from 'typeorm';
import { NewAdminDto } from './dto/new-admin.dto';
import { SuccessDto } from 'src/common/dto/success.dto';
import { AdminDto } from './dto/admin.dto';
import { EncryptionService } from 'src/encryption/encryption.service';
import { PasswordEntity } from 'src/auth/db/password.entity';
import { UserEntity } from 'src/user/db/user.entity';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(AdminEntity)
        private adminRepository: Repository<AdminEntity>,

        @InjectRepository(PasswordEntity)
        private passwordRepository: Repository<PasswordEntity>,

        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,

        private readonly encryptionService: EncryptionService
    ){}

    // admin methods
  
    public async newAdmin({admin, password}:{admin: NewAdminDto, password: string}): Promise<SuccessDto>{
        const adminEntity = new AdminEntity()
        adminEntity.email = admin.email
        adminEntity.name = admin.name
        adminEntity.surname = admin.surname
        await this.adminRepository.save(adminEntity)

        const passwordEntity = new PasswordEntity()
        passwordEntity.email = admin.email
        passwordEntity.isAdmin = true
        passwordEntity.passwordHash = await this.encryptionService.hashPassword(password)
        passwordEntity.userId = adminEntity.id
        await this.passwordRepository.save(passwordEntity)
        return new SuccessDto()
    }

    public async getAdmins(): Promise<AdminDto[]>{
        return (await this.adminRepository.find()).map(a=>({
            id: a.id,
            name: a.name,
            surname: a.surname,
            email: a.email
        }))
    }

    public async increaseUserBalance(id: number, amount: number): Promise<SuccessDto>{
        const user = await this.userRepository.findOne({where: {id}})
        user.balance += amount 
        console.log(user.balance)
        await this.userRepository.save(user);

        return new SuccessDto()
    }

}
