import { Injectable } from '@nestjs/common';
import { SuccessDto } from 'src/common/dto/success.dto';
import { PasswordEntity } from 'src/user/db/password.entity';
import { NewPasswordDto } from 'src/user/dto/new-password.dto';
import * as bcrypt from 'bcrypt';
import { PasswordDto } from 'src/user/dto/password.dto';

@Injectable()
export class EncryptionService {

    public async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt();
        return bcrypt.hash(password, salt);
    }
    
      public async comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(plainPassword, hashedPassword);
    }

}
