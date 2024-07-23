import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminEntity } from './db/admin.entity';
import { Repository } from 'typeorm';
import { NewAdminDto } from './dto/new-admin.dto';
import { SuccessDto } from 'src/common/dto/success.dto';
import { AdminDto } from './dto/admin.dto';

@Injectable()
export class AdminsService {
    constructor(
        @InjectRepository(AdminEntity)
        private adminRepository: Repository<AdminEntity>,
    ){}

    // методи для адмінів
  
    public async newAdmin(admin: NewAdminDto): Promise<SuccessDto>{
        const adminEntity = new AdminEntity()
        adminEntity.email = admin.email
        adminEntity.name = admin.name
        adminEntity.surname = admin.surname
        await this.adminRepository.save(adminEntity)
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

}
