import { Module } from '@nestjs/common';
import { AgriculturalActivityService } from './agricultural-activity.service';
import { AgriculturalActivityController } from './agricultural-activity.controller';

@Module({
  controllers: [AgriculturalActivityController],
  providers: [AgriculturalActivityService],
})
export class AgriculturalActivityModule {}
