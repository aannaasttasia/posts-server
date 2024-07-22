import { IsEmail } from "class-validator";

export class NewAdminDto{
    name: string;
    surname: string;
    @IsEmail()
    email: string;
}