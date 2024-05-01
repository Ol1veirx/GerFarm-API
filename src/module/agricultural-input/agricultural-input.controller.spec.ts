import { Test, TestingModule } from '@nestjs/testing';
import { AgriculturalInputController } from './agricultural-input.controller';
import { AgriculturalInputService } from './agricultural-input.service';

describe('AgriculturalInputController', () => {
  let controller: AgriculturalInputController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgriculturalInputController],
      providers: [AgriculturalInputService],
    }).compile();

    controller = module.get<AgriculturalInputController>(AgriculturalInputController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
