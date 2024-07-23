import { IsEmail, IsPhoneNumber } from "class-validator";

export class NewUserDto{
    name: string;
    surname: string;
    address: string;
    @IsPhoneNumber('UA')
    phoneNumber: string;
    @IsEmail()
    email: string;
}