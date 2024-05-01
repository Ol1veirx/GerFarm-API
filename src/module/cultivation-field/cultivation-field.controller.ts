import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CultivationFieldService } from './cultivation-field.service';
import { CreateCultivationFieldDto } from './dto/create-cultivation-field.dto';
import { UpdateCultivationFieldDto } from './dto/update-cultivation-field.dto';

@Controller('cultivation-field')
export class CultivationFieldController {
  constructor(private readonly cultivationFieldService: CultivationFieldService) {}

  @Post()
  create(@Body() createCultivationFieldDto: CreateCultivationFieldDto) {
    return this.cultivationFieldService.create(createCultivationFieldDto);
  }

  @Get()
  findAll() {
    return this.cultivationFieldService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cultivationFieldService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCultivationFieldDto: UpdateCultivationFieldDto) {
    return this.cultivationFieldService.update(+id, updateCultivationFieldDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cultivationFieldService.remove(+id);
  }
}
