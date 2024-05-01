import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgriculturalActivityService } from './agricultural-activity.service';
import { CreateAgriculturalActivityDto } from './dto/create-agricultural-activity.dto';
import { UpdateAgriculturalActivityDto } from './dto/update-agricultural-activity.dto';

@Controller('agricultural-activity')
export class AgriculturalActivityController {
  constructor(private readonly agriculturalActivityService: AgriculturalActivityService) {}

  @Post()
  create(@Body() createAgriculturalActivityDto: CreateAgriculturalActivityDto) {
    return this.agriculturalActivityService.create(createAgriculturalActivityDto);
  }

  @Get()
  findAll() {
    return this.agriculturalActivityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agriculturalActivityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgriculturalActivityDto: UpdateAgriculturalActivityDto) {
    return this.agriculturalActivityService.update(+id, updateAgriculturalActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agriculturalActivityService.remove(+id);
  }
}
