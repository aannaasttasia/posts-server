import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './db/user.entity';
import { NewUserDto } from 'src/user/dto/new-user.dto';
import { SuccessDto } from 'src/common/dto/success.dto';
import { UserDto } from 'src/user/dto/user.dto';
import { Repository } from 'typeorm';
import { PasswordEntity } from '../auth/db/password.entity';
import { EncryptionService } from 'src/encryption/encryption.service';

@Injectable()
export class UserService {
    constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(PasswordEntity)
    private passwordRepository: Repository<PasswordEntity>,

    private readonly encryptionService: EncryptionService,
    ) {}

    // user methods

    public async newUser(
        user: NewUserDto
    ): Promise<SuccessDto> {
        const existingAdmin = await this.userRepository.findOne({
            where: { email: user.email },
        });
        if (existingAdmin) {
            throw new ConflictException(
                'An account with this email address already exists',
            );
        } else {
            const userEntity = new UserEntity();
            userEntity.address = user.address;
            console.log(user.address);
            userEntity.email = user.email;
            userEntity.name = user.name;
            userEntity.phoneNumber = user.phoneNumber;
            userEntity.surname = user.surname;
            await this.userRepository.save(userEntity);

            const passwordEntity = new PasswordEntity();
            passwordEntity.email = user.email;
            passwordEntity.isAdmin = false;
            passwordEntity.userId = userEntity.id;
            passwordEntity.passwordHash =
        await this.encryptionService.hashPassword(user.password);
            await this.passwordRepository.save(passwordEntity);

            return new SuccessDto();
        }
    }

    public async getUsers(): Promise<UserDto[]> {
        return (await this.userRepository.find()).map((u) => ({
            id: u.id,
            name: u.name,
            surname: u.surname,
            address: u.address,
            phoneNumber: u.phoneNumber,
            email: u.email,
            balance: u.balance,
        }));
    }

    public async getUser(id: number): Promise<UserDto> {
        return await this.userRepository.findOne({ where: { id } });
    }

    public async deleteUser(id: number): Promise<SuccessDto> {
        await this.userRepository.delete(id);
        return new SuccessDto();
    }
}
