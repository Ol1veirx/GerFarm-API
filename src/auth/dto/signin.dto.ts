import { IsEmail, IsNotEmpty} from "class-validator"

export class signInDto {
    @IsEmail()
    email: string;

    @IsNotEmpty({message: 'Password cannot be empty'})
    password: string
}