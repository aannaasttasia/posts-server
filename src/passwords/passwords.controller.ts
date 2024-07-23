import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PasswordsService } from './passwords.service';
import { NewPasswordDto } from './dto/new-password.dto';
import { SuccessDto } from 'src/common/dto/success.dto';

@Controller()
export class PasswordsController {
    constructor(private readonly passwordsService: PasswordsService){}

    // методи для паролів

    @Post('password/new')
    newPassword(@Body() body: NewPasswordDto): Promise<SuccessDto>{
        return this.passwordsService.newPassword(body)
    }

    @Get('password')
    getPassword(@Query() params: {userId: number}){
        return this.passwordsService.getPassword(params.userId)
    }


    
}
