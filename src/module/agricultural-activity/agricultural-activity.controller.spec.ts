import { Test, TestingModule } from '@nestjs/testing';
import { AgriculturalActivityController } from './agricultural-activity.controller';
import { AgriculturalActivityService } from './agricultural-activity.service';

describe('AgriculturalActivityController', () => {
  let controller: AgriculturalActivityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgriculturalActivityController],
      providers: [AgriculturalActivityService],
    }).compile();

    controller = module.get<AgriculturalActivityController>(AgriculturalActivityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
