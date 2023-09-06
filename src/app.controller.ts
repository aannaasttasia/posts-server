import { Body, Controller, Delete, Get, Post, Query, Put, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { PostDto } from './dto/post.dto';
import { SuccessDto } from './dto/success.dto';
import { PostsDto } from './dto/posts.dto';
import { GetPostsQueryDto } from './dto/get-posts-query.dto';
import { NewPostDto } from './dto/new-post.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('posts')
  getPosts(@Query() params: GetPostsQueryDto): Promise<PostsDto> {
    return this.appService.posts(params)
  }

  @Get('post')
  getPost(@Query() params: {id: number}): Promise<PostDto> {
    return this.appService.post(params.id);
  }

  @Post('new')
  newPost(@Body() body: NewPostDto): Promise<SuccessDto> {
    console.log(body)
    return this.appService.newPost(body)
  }

  @Delete('post/:id')
  findOneDelete(@Param() params: {id: number}): Promise<SuccessDto> {
    return this.appService.delete(params.id);
  }

  @Post('update/:id')
  update(@Param() params : {id: number}, @Body() post: NewPostDto): Promise<SuccessDto> {
    console.log('here', post)
    return this.appService.put(post, params.id);
  }
}
 