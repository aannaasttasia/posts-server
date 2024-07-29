import { Controller, Delete, Param, Get, Post, Body } from '@nestjs/common';
import { NewUserDto } from 'src/user/dto/new-user.dto';
import { SuccessDto } from 'src/common/dto/success.dto';
import { UserService } from './user.service';
import { UserDto } from 'src/user/dto/user.dto';

@Controller()
export class UserController {
    constructor(private readonly usersService: UserService) {}

    // user methods

  @Post('user/new')
    newUser(
    @Body() user: NewUserDto,
    ): Promise<SuccessDto> {
        return this.usersService.newUser(user);
    }

  @Get('users')
  getUsers(): Promise<UserDto[]> {
      return this.usersService.getUsers();
  }

  @Get('user/:id')
  getUser(@Param('id') id: number ): Promise<UserDto> {
      return this.usersService.getUser(id);
  }

  @Delete('user/:id')
  deleteUser(@Param('id') id: number): Promise<SuccessDto> {
      return this.usersService.deleteUser(id);
  }
}
