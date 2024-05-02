import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/context/prisma.service';
import * as bcrypt from 'bcrypt'
import { User } from '@prisma/client';

@Injectable()
export class UserService {

  constructor(private readonly dbContext: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    try {
      const userExisting = await this.findByEmail(data.email);

      if(userExisting) {
        throw new HttpException('Email already exists', HttpStatus.CONFLICT)
      }

      const passwordHash = await bcrypt.hash(data.password, 10)

      const newUser = await this.dbContext.user.create({
        data: {
          ...data,
          password: passwordHash
        }
      })

      return newUser;

    } catch (error) {

      console.error('Error create user', error)
      throw new HttpException('Faile to create new user', HttpStatus.INTERNAL_SERVER_ERROR)
      
    }
  }

  async findAll(): Promise<User[] | Error> {
    try {

      const users = await this.dbContext.user.findMany()
      return users;

    } catch (error) {
      throw new HttpException('Error when searching for users', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async findOne(userId: string): Promise<User | Error> {
    try {
      const user = await this.dbContext.user.findUnique({
        where: {
          id: userId
        }
      })

      if(!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND)
      }

      return user;

    } catch(error) {
      console.error('Internal server error: ', error)
      throw new HttpException('Internal error.', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async findByEmail(email: string): Promise<User>{
    try {
      const userExists = await this.dbContext.user.findUnique({
        where: {
          email: email
        }
      })

      return userExists;
    } catch(error) {
      console.error('Internal server error: ', error)
      throw new HttpException('Internal server error.', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async update(userId: string, data: UpdateUserDto): Promise<User | Error> {

    if(userId !== data.id){
      throw new HttpException('User ID mismatch.', HttpStatus.BAD_REQUEST)
    }

    try {
      const updateUser = await this.dbContext.user.update({
        where: {
          id: userId
        },
        data: {
          ...data
        }
      })

      if(!updateUser) {
        throw new HttpException('User not found.', HttpStatus.NOT_FOUND)
      }

      return updateUser;

    } catch(error) {
      console.error('Internal error: ', error)
      throw new HttpException('Error in update user.', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async remove(userId: string): Promise<User | Error> {
    try {
      const user = await this.dbContext.user.findUnique({
        where: {
          id: userId
        }
      })

      if(!user){
        throw new HttpException('User not found.', HttpStatus.NOT_FOUND)
      }

      const result = await this.dbContext.user.delete({
        where: {
          id: userId
        }
      })

      return result;

    } catch(error) {
      console.error('Interal error: ', error)
      throw new HttpException('Error in deleting user.', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
