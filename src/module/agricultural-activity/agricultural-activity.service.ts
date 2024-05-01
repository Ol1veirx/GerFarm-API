import { Injectable } from '@nestjs/common';
import { CreateAgriculturalActivityDto } from './dto/create-agricultural-activity.dto';
import { UpdateAgriculturalActivityDto } from './dto/update-agricultural-activity.dto';

@Injectable()
export class AgriculturalActivityService {
  create(createAgriculturalActivityDto: CreateAgriculturalActivityDto) {
    return 'This action adds a new agriculturalActivity';
  }

  findAll() {
    return `This action returns all agriculturalActivity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agriculturalActivity`;
  }

  update(id: number, updateAgriculturalActivityDto: UpdateAgriculturalActivityDto) {
    return `This action updates a #${id} agriculturalActivity`;
  }

  remove(id: number) {
    return `This action removes a #${id} agriculturalActivity`;
  }
}
