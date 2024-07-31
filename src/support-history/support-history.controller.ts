import { Body, Controller, Post, Headers, UnauthorizedException, Get } from '@nestjs/common';
import { SupportHistoryService } from './support-history.service';
import { NewSupportHistoryDto } from './dto/new-support-history.dto';
import { SuccessDto } from 'src/common/dto/success.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { SupportHistoryDto } from './dto/support-history.dto';

@Controller('supportHistory')
export class SupportHistoryController {
    constructor(private readonly supportHistoryService: SupportHistoryService, private readonly authGuard: AuthGuard) {}

    @Post('new')
    async newMessage(@Body() body: NewSupportHistoryDto, @Headers('authorization') authorization: string): Promise<SuccessDto> {
        const token = authorization?.split(' ')[1];
        if (!token) {
            throw new UnauthorizedException('Authorization token not found');
        }
        body.userId = await this.authGuard.extractUserIdFromToken(token);
        if (body.userId === null) {
            throw new UnauthorizedException('Invalid or expired token');
        }
        return this.supportHistoryService.newMessage(body);
    }

    @Get()
    getSMessage(): Promise<SupportHistoryDto[]>{
        return this.supportHistoryService.getMessage();
    }
}
