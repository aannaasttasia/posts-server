import { IsEmail } from "class-validator";

export class NewPasswordDto{
    userId: number;
    @IsEmail()
    email: string;
    passwordHash: string;
    isAdmin: boolean;
}