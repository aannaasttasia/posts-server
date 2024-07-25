import { IsEmail } from "class-validator";

export class NewSupportHistoryDto{
    userId: number;
    @IsEmail()
    email: string;
    description: string;
    date: Date;
    constructor() {
        this.date = new Date(); 
    }
}