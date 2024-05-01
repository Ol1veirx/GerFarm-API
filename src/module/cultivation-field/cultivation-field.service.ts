import { Injectable } from '@nestjs/common';
import { CreateCultivationFieldDto } from './dto/create-cultivation-field.dto';
import { UpdateCultivationFieldDto } from './dto/update-cultivation-field.dto';

@Injectable()
export class CultivationFieldService {
  create(createCultivationFieldDto: CreateCultivationFieldDto) {
    return 'This action adds a new cultivationField';
  }

  findAll() {
    return `This action returns all cultivationField`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cultivationField`;
  }

  update(id: number, updateCultivationFieldDto: UpdateCultivationFieldDto) {
    return `This action updates a #${id} cultivationField`;
  }

  remove(id: number) {
    return `This action removes a #${id} cultivationField`;
  }
}
