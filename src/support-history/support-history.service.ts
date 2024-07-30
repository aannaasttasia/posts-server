import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SupportHistoryEntity } from './db/support-history.entity';
import { Repository } from 'typeorm';
import { NewSupportHistoryDto } from './dto/new-support-history.dto';
import { SuccessDto } from 'src/common/dto/success.dto';
import { SupportHistoryDto } from './dto/support-history.dto';

@Injectable()
export class SupportHistoryService {
    constructor(
    @InjectRepository(SupportHistoryEntity)
    private supportHistoryRepository: Repository<SupportHistoryEntity>,
    ) {}


    public async newSupportHistory(
        support: NewSupportHistoryDto,
    ): Promise<SuccessDto> {
        const supportHistoryEntity = new SupportHistoryEntity();
        supportHistoryEntity.date = support.date || new Date();
        supportHistoryEntity.description = support.description;
        supportHistoryEntity.email = support.email;
        supportHistoryEntity.userId = support.userId;
        await this.supportHistoryRepository.save(supportHistoryEntity);
        return new SuccessDto();
    }

    public async getSupportHistory(): Promise<SupportHistoryDto[]>{
        return await this.supportHistoryRepository.find()
    }
}
