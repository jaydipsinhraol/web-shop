import { Test, TestingModule } from '@nestjs/testing';
import { PaymentProcessorsService } from './payment-processors.service';

describe('PaymentProcessorsService', () => {
  let service: PaymentProcessorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentProcessorsService],
    }).compile();

    service = module.get<PaymentProcessorsService>(PaymentProcessorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
