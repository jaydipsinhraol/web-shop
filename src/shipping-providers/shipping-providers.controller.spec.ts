import { Test, TestingModule } from '@nestjs/testing';
import { ShippingProvidersController } from './shipping-providers.controller';

describe('ShippingProvidersController', () => {
  let controller: ShippingProvidersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShippingProvidersController],
    }).compile();

    controller = module.get<ShippingProvidersController>(ShippingProvidersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
