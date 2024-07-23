import { Controller, Delete, Param, Get, Post, Body } from '@nestjs/common';
import { NewUserDto } from 'src/users/dto/new-user.dto';
import { SuccessDto } from 'src/common/dto/success.dto';
import { UsersService } from './users.service';
import { UserDto } from 'src/users/dto/user.dto';

@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    // методи для користувачів

    @Post('user/new')
    newUser(@Body() body: NewUserDto): Promise<SuccessDto>{
        return this.usersService.newUser(body)
    }

    @Get('users')
    getUsers(): Promise<UserDto[]>{
        return this.usersService.getUsers()
    }

    @Get('user/:id')
    getUser(@Param() params: {id: number}): Promise<UserDto>{
        return this.usersService.getUser(params.id)
    }

    @Delete('user/:id')
    deleteUser(@Param('id') id: number): Promise<SuccessDto> {
        return this.usersService.deleteUser(id);
    }

}
