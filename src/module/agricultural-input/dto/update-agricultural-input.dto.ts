import { PartialType } from '@nestjs/mapped-types';
import { CreateAgriculturalInputDto } from './create-agricultural-input.dto';

export class UpdateAgriculturalInputDto extends PartialType(CreateAgriculturalInputDto) {}
