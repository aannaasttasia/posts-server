import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostEntity } from './db/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // or the Docker service name if NestJS is also in a container
      port: 3307,
      username: 'myuser',
      password: 'mypassword',
      database: 'mydatabase',
      entities: [PostEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([PostEntity])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}