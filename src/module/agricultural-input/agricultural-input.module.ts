import { Module } from '@nestjs/common';
import { AgriculturalInputService } from './agricultural-input.service';
import { AgriculturalInputController } from './agricultural-input.controller';

@Module({
  controllers: [AgriculturalInputController],
  providers: [AgriculturalInputService],
})
export class AgriculturalInputModule {}
