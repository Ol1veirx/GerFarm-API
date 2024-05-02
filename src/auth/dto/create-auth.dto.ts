import { UserType } from "@prisma/client"
import { IsEmail, IsNotEmpty } from "class-validator"

export class CreateAuthDto {
    @IsNotEmpty()
    name: string

    @IsEmail()
    email: string

    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    userType: UserType

}
