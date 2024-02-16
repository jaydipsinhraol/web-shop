import { Test, TestingModule } from '@nestjs/testing';
import { PaymentProcessorsController } from './payment-processors.controller';

describe('PaymentProcessorsController', () => {
  let controller: PaymentProcessorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentProcessorsController],
    }).compile();

    controller = module.get<PaymentProcessorsController>(PaymentProcessorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
