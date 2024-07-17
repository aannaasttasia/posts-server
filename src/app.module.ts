import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostEntity } from './db/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './db/product.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [PostEntity,ProductEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([PostEntity,ProductEntity])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
