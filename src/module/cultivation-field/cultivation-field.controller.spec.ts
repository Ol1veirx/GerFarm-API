import { Test, TestingModule } from '@nestjs/testing';
import { CultivationFieldController } from './cultivation-field.controller';
import { CultivationFieldService } from './cultivation-field.service';

describe('CultivationFieldController', () => {
  let controller: CultivationFieldController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CultivationFieldController],
      providers: [CultivationFieldService],
    }).compile();

    controller = module.get<CultivationFieldController>(CultivationFieldController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
