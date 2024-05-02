import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { signInDto } from './dto/signin.dto';
import { validate } from 'class-validator';
import { CreateUserDto } from 'src/module/user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: signInDto) {
    try {
      const errors = await validate(signInDto)

      if(errors.length > 0) {
        throw new HttpException('Invalid data', HttpStatus.BAD_REQUEST)
      }

      const tokenAccess = await this.authService.signIn(signInDto.email, signInDto.password)

      return tokenAccess 

    } catch(error) {
      console.error('Internal server error in Login', error);
      throw new HttpException('Internal server error in Login', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @HttpCode(HttpStatus.OK)
  @Post('signUp')
  async signUp(@Body() data: CreateUserDto) {
    try {
      const errors = await validate(data)

      if(errors.length > 0) {
        throw new HttpException('Invalid data', HttpStatus.BAD_REQUEST)
      }

      const newUser = await this.authService.signUp(data)

      return newUser;
    } catch(error) {
      console.error('Internal server error in create acount', error)
      throw new HttpException('Internal server error.', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
