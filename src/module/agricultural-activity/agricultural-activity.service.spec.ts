import { Test, TestingModule } from '@nestjs/testing';
import { AgriculturalActivityService } from './agricultural-activity.service';

describe('AgriculturalActivityService', () => {
  let service: AgriculturalActivityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgriculturalActivityService],
    }).compile();

    service = module.get<AgriculturalActivityService>(AgriculturalActivityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
