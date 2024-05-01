import { Test, TestingModule } from '@nestjs/testing';
import { AgriculturalInputService } from './agricultural-input.service';

describe('AgriculturalInputService', () => {
  let service: AgriculturalInputService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgriculturalInputService],
    }).compile();

    service = module.get<AgriculturalInputService>(AgriculturalInputService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
