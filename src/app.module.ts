import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './db/product.entity';
import { ConfigModule } from '@nestjs/config';

import { appProviders } from './app.providers';

@Module({
  providers: [...appProviders],
  exports: [...appProviders],
})
export class AppModule {}