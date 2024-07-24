import { Body, Controller, Post, Get, Query, Param } from '@nestjs/common';
import { AdminService } from './admin.service';
import { SuccessDto } from 'src/common/dto/success.dto';
import { NewAdminDto } from './dto/new-admin.dto';
import { AdminDto } from './dto/admin.dto';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/db/user.entity';

@Controller("admin")
export class AdminController {
    constructor(
        private readonly adminsServise: AdminService,
    ){}

    // admin methods

    @Post('new')
    newAdmin(@Body() body:{admin: NewAdminDto, password: string}): Promise<SuccessDto>{
        return this.adminsServise.newAdmin(body)
    }

    @Get()
    getAdmins(): Promise<AdminDto[]>{
        return this.adminsServise.getAdmins()
    }
    
    @Post('increase/:userId')
    increaseUserBalance(@Param('userId') userId: number, @Body() body:{amount: number}) {
        return this.adminsServise.increaseUserBalance(userId, body.amount)
    }
    
}
