import { Body, Controller, Post } from '@nestjs/common';
import { SupportHistoryService } from './support-history.service';
import { NewSupportHistoryDto } from './dto/new-support-history.dto';
import { SuccessDto } from 'src/common/dto/success.dto';

@Controller('supportHistory')
export class SupportHistoryController {
  constructor(private readonly supportHistoryService: SupportHistoryService) {}

  // support methods

  @Post('new')
  newSupportHistory(@Body() body: NewSupportHistoryDto): Promise<SuccessDto> {
    return this.supportHistoryService.newSupportHistory(body);
  }
}
