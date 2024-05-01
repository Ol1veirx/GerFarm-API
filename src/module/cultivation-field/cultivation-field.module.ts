import { Module } from '@nestjs/common';
import { CultivationFieldService } from './cultivation-field.service';
import { CultivationFieldController } from './cultivation-field.controller';

@Module({
  controllers: [CultivationFieldController],
  providers: [CultivationFieldService],
})
export class CultivationFieldModule {}
