import { Body, Controller, Post, Get, Param, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { SuccessDto } from 'src/common/dto/success.dto';
import { NewAdminDto } from './dto/new-admin.dto';
import { AdminDto } from './dto/admin.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminsServise: AdminService) {}

    // admin methods

  @Post('new')
    newAdmin(
    @Body() admin: NewAdminDto,
    ): Promise<SuccessDto> {
        return this.adminsServise.newAdmin(admin);
    }

  @Get()
  getAdmins(): Promise<AdminDto[]> {
      return this.adminsServise.getAdmins();
  }

  @Post('increase/:userId')
  @UseGuards(AuthGuard)
  increaseUserBalance(
    @Param('userId') userId: number,
    @Body() body: { amount: number },
  ) {
      return this.adminsServise.increaseUserBalance(userId, body.amount);
  }
}
