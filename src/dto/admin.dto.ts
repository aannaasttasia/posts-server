import { IsEmail } from "class-validator";

export class AdminDto{
    id: number;
    name: string;
    surname: string;
    email: string;
}