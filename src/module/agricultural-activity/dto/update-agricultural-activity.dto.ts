import { PartialType } from '@nestjs/mapped-types';
import { CreateAgriculturalActivityDto } from './create-agricultural-activity.dto';

export class UpdateAgriculturalActivityDto extends PartialType(CreateAgriculturalActivityDto) {}
