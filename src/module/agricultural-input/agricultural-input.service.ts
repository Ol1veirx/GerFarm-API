import { Injectable } from '@nestjs/common';
import { CreateAgriculturalInputDto } from './dto/create-agricultural-input.dto';
import { UpdateAgriculturalInputDto } from './dto/update-agricultural-input.dto';

@Injectable()
export class AgriculturalInputService {
  create(createAgriculturalInputDto: CreateAgriculturalInputDto) {
    return 'This action adds a new agriculturalInput';
  }

  findAll() {
    return `This action returns all agriculturalInput`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agriculturalInput`;
  }

  update(id: number, updateAgriculturalInputDto: UpdateAgriculturalInputDto) {
    return `This action updates a #${id} agriculturalInput`;
  }

  remove(id: number) {
    return `This action removes a #${id} agriculturalInput`;
  }
}
