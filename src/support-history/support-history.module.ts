import { Module } from '@nestjs/common';
import { SupportHistoryController } from './support-history.controller';
import { SupportHistoryService } from './support-history.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupportHistoryEntity } from './db/support-history.entity';

@Module({
    imports:[TypeOrmModule.forFeature([SupportHistoryEntity])],
    controllers: [SupportHistoryController],
    providers: [SupportHistoryService]
})
export class SupportHistoryModule {}
