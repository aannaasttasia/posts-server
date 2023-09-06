import { Injectable } from '@nestjs/common';
import { PostDto } from './dto/post.dto';
import { GetPostsQueryDto } from './dto/get-posts-query.dto';
import { PostEntity } from './db/post.entity';
import { PostPreviewDto, PostsDto } from './dto/posts.dto';
import { SuccessDto } from './dto/success.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NewPostDto } from './dto/new-post.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) {}
  

  public async newPost(post: NewPostDto): Promise<SuccessDto> {
    const postEntity = new PostEntity()
    postEntity.title = post.title
    postEntity.description = post.description
    postEntity.details = post.details
    postEntity.image = post.image
    await this.postRepository.save(postEntity)
    return new SuccessDto()
  }

  public async posts(params: GetPostsQueryDto): Promise<PostsDto> {
    const posts: PostPreviewDto[] = (await this.postRepository.find({
      skip: params.offset,
      take: params.count,
      order: { id: 'ASC' },
    })).map(p => ({title: p.title, description: p.description, image: p.image, id: p.id}))
    return {posts, offset: params.offset, totalCount: await this.postRepository.count()}
  }

  public async post(id: number): Promise<PostDto> {
    const postEntity = await this.postRepository.findOne({where: { id }})
    return {...postEntity}
  }

  public async delete(id: number): Promise<SuccessDto> {
    const postEntity = await this.postRepository.findOne({where: { id }})
    await this.postRepository.delete(id)
    return new SuccessDto()
  }

  public async put(post: NewPostDto, id: number): Promise<SuccessDto> {
    const postEntity = await this.postRepository.findOne({where: { id }})
    console.log(post, id, postEntity)
    postEntity.title = post.title
    postEntity.description = post.description
    postEntity.details = post.details
    postEntity.image = post.image
    await this.postRepository.save(postEntity)
    return new SuccessDto()
  }
}
