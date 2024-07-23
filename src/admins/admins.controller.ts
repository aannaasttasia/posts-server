import { Body, Controller, Post, Get } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { SuccessDto } from 'src/common/dto/success.dto';
import { NewAdminDto } from './dto/new-admin.dto';
import { AdminDto } from './dto/admin.dto';

@Controller()
export class AdminsController {
    constructor(private readonly adminsServise: AdminsService){}

    // методи для адмінів

    @Post('admin/new')
    newAdmin(@Body() body: NewAdminDto): Promise<SuccessDto>{
        return this.adminsServise.newAdmin(body)
    }

    @Get('admins')
    getAdmins(): Promise<AdminDto[]>{
        return this.adminsServise.getAdmins()
    }
    
    
    
}
