import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgriculturalInputService } from './agricultural-input.service';
import { CreateAgriculturalInputDto } from './dto/create-agricultural-input.dto';
import { UpdateAgriculturalInputDto } from './dto/update-agricultural-input.dto';

@Controller('agricultural-input')
export class AgriculturalInputController {
  constructor(private readonly agriculturalInputService: AgriculturalInputService) {}

  @Post()
  create(@Body() createAgriculturalInputDto: CreateAgriculturalInputDto) {
    return this.agriculturalInputService.create(createAgriculturalInputDto);
  }

  @Get()
  findAll() {
    return this.agriculturalInputService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agriculturalInputService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgriculturalInputDto: UpdateAgriculturalInputDto) {
    return this.agriculturalInputService.update(+id, updateAgriculturalInputDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agriculturalInputService.remove(+id);
  }
}
