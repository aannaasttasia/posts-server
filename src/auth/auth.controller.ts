import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { PasswordDto } from 'src/auth/dto/password.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: { userId: number; password: string }) {
    return this.authService.signIn(signInDto.userId, signInDto.password);
  }

  @Get('password')
  getPassword(): Promise<PasswordDto[]> {
    return this.authService.getPasswords();
  }
}
