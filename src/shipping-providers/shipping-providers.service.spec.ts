import { Test, TestingModule } from '@nestjs/testing';
import { ShippingProvidersService } from './shipping-providers.service';

describe('ShippingProvidersService', () => {
  let service: ShippingProvidersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShippingProvidersService],
    }).compile();

    service = module.get<ShippingProvidersService>(ShippingProvidersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
