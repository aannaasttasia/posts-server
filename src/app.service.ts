import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './db/product.entity';
import { NewProductDto } from './dto/new-product.dto';
import { SuccessDto } from './dto/success.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  // Методи для роботи з продуктами

  // public async addProduct(product: NewProductDto): Promise<SuccessDto> {
  //   const productEntity = new ProductEntity()
  //   productEntity.title = product.title
  //   productEntity.description = product.description
  //   productEntity.category = product.category
  //   productEntity.discountPercentage = product.discountPercentage
  //   productEntity.price = product.price
  //   productEntity.rating = product.rating
  //   productEntity.stock = product.stock
  //   productEntity.thumbnail = product.thumbnail
  //   await this.productRepository.save(productEntity)
  //   return new SuccessDto()
  // }

  // public async getProduct(id: number): Promise<ProductType> {
  //   return this.productRepository.findOne({ where: { id } });
  // }

  // public async getAllProducts(): Promise<ProductType[]> {
  //   return this.productRepository.find();
  // }

  // public async updateProduct(id: number, product: NewProductDto): Promise<SuccessDto> {
  //   await this.productRepository.update(id, product);
  //   return new SuccessDto();
  // }

  // public async deleteProduct(id: number): Promise<SuccessDto> {
  //   await this.productRepository.delete(id);
  //   return new SuccessDto();
  // }
  // // Методи для роботи з постами
  // public async newPost(post: NewPostDto): Promise<SuccessDto> {
  //   const postEntity = new PostEntity()
  //   postEntity.title = post.title
  //   postEntity.description = post.description
  //   postEntity.details = post.details
  //   postEntity.image = post.image
  //   await this.postRepository.save(postEntity)
  //   return new SuccessDto()
  // }

  // public async posts(params: GetPostsQueryDto): Promise<PostsDto> {
  //   const posts: PostPreviewDto[] = (await this.postRepository.find({
  //     skip: params.offset,
  //     take: params.count,
  //     order: { id: 'ASC' },
  //   })).map(p => ({title: p.title, description: p.description, image: p.image, id: p.id}))
  //   return {posts, offset: params.offset, totalCount: await this.postRepository.count()}
  // }

  // public async post(id: number): Promise<PostDto> {
  //   const postEntity = await this.postRepository.findOne({where: { id }})
  //   return {...postEntity}
  // }

  // public async delete(id: number): Promise<SuccessDto> {
  //   const postEntity = await this.postRepository.findOne({where: { id }})
  //   await this.postRepository.delete(id)
  //   return new SuccessDto()
  // }

  // public async put(post: NewPostDto, id: number): Promise<SuccessDto> {
  //   const postEntity = await this.postRepository.findOne({where: { id }})
  //   console.log(post, id, postEntity)
  //   postEntity.title = post.title
  //   postEntity.description = post.description
  //   postEntity.details = post.details
  //   postEntity.image = post.image
  //   await this.postRepository.save(postEntity)
  //   return new SuccessDto()
  // }
}
