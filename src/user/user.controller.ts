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
    @Body() body: { user: NewUserDto; password: string },
  ): Promise<SuccessDto> {
    return this.usersService.newUser(body);
  }

  @Get('users')
  getUsers(): Promise<UserDto[]> {
    return this.usersService.getUsers();
  }

  @Get('user/:id')
  getUser(@Param() params: { id: number }): Promise<UserDto> {
    return this.usersService.getUser(params.id);
  }

  @Delete('user/:id')
  deleteUser(@Param('id') id: number): Promise<SuccessDto> {
    return this.usersService.deleteUser(id);
  }
}
