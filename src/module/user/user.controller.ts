import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { validate } from 'class-validator';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: CreateUserDto) {
    try{

      const errors = await validate(data);
      if(errors.length > 0) {
        throw new HttpException('Validation failed.', HttpStatus.BAD_REQUEST)
      }

      const newUser = await this.userService.create(data);

      return newUser;
    } catch(error) {
      console.error('Internal error creating user: ', error)
      throw new HttpException('Failed create user. Please try again later.', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Get()
  async findAll() {
    try {
      const users = await this.userService.findAll()

      return users
    } catch(error) {
      console.error('Error in search users', error)
      throw new HttpException('Failed to search users. Please try again later', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const user = await this.userService.findOne(id);
      return user;
    } catch(error) {
      console.error('Error in search usr: ', error)
      throw new HttpException('Failed search user. Please try again later.', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    try {
      const errors = await validate(data)
      if(errors.length > 0) {
        throw new HttpException('Validation failed',HttpStatus.BAD_REQUEST)
      }

      const updateUser = await this.userService.update(id, data)

      return updateUser;
    } catch(error) {
      console.error('Error update user: ', error)
      throw new HttpException('Failed update user', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.userService.remove(id)
      return { message: 'User removed successfully' }
    } catch(error) {
      console.error('Failde delete user: ', error)
      throw new HttpException('Failed remove user.', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
