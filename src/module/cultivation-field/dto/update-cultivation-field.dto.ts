import { PartialType } from '@nestjs/mapped-types';
import { CreateCultivationFieldDto } from './create-cultivation-field.dto';

export class UpdateCultivationFieldDto extends PartialType(CreateCultivationFieldDto) {}
