import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from 'src/module/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { CreateUserDto } from 'src/module/user/dto/create-user.dto';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async signIn(email: string, password: string): Promise<{access_token: string}> {
    try {
      const user = await this.userService.findByEmail(email)

      if(!user) {
        throw new HttpException('User not found', HttpStatus.BAD_REQUEST)
      }

      const passwordMatches = await bcrypt.compare(password, user.password)

      if(!passwordMatches){
        throw new HttpException('Password mismatch', HttpStatus.BAD_REQUEST)
      }

      const payload = { sub: user.id, email: user.email }

      const access_token = await this.jwtService.signAsync(payload)

      return { access_token }
    } catch(error) {
      console.error('Internal server error', error)
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async signUp(data: CreateUserDto): Promise<{access_token: string}> {
    try {
      const userExists = await this.userService.findByEmail(data.email)

      if(userExists){
        throw new HttpException('Registered email.', HttpStatus.BAD_REQUEST)
      }

      const newUser = await this.userService.create(data);

      const accessToken = await this.generateToken(newUser.id, newUser.email)

      return { access_token: accessToken }
      
    } catch(error) {
      console.error('Internal server error', error)
      throw new HttpException('Internal server erro. Try again', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  private async generateToken(id: string, email: string){
    const payload = { sub:id, email: email }
    return this.jwtService.signAsync(payload)
  }
}
