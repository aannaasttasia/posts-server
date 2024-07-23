import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './db/user.entity';
import { NewUserDto } from 'src/users/dto/new-user.dto';
import { SuccessDto } from 'src/common/dto/success.dto';
import { UserDto } from 'src/users/dto/user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
    
    // методи для користувачів

  public async newUser(user: NewUserDto): Promise<SuccessDto>{
    const userEntity = new UserEntity()
    userEntity.address = user.address
    userEntity.email = user.email
    userEntity.name = user.name
    userEntity.phoneNumber = user.phoneNumber
    userEntity.surname = user.surname
    await this.userRepository.save(userEntity)

    return new SuccessDto()
  }

  public async getUsers(): Promise<UserDto[]>{
    return (await this.userRepository.find()).map(u=>({
        id: u.id,
        name: u.name,
        surname: u.surname,
        address: u.address,
        phoneNumber: u.phoneNumber,
        email: u.email,
        balance: u.balance
    }))
  }

  public async getUser(id: number): Promise<UserDto>{
    return await this.userRepository.findOne({where: { id }})
  }

  public async deleteUser(id: number): Promise<SuccessDto>{
    await this.userRepository.delete(id)
    return new SuccessDto()
  }

  async findOne(name: string): Promise<UserDto | undefined> {
    return this.userRepository.findOne({where: {name}});
  }

}
