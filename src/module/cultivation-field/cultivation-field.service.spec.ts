import { Test, TestingModule } from '@nestjs/testing';
import { CultivationFieldService } from './cultivation-field.service';

describe('CultivationFieldService', () => {
  let service: CultivationFieldService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CultivationFieldService],
    }).compile();

    service = module.get<CultivationFieldService>(CultivationFieldService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
