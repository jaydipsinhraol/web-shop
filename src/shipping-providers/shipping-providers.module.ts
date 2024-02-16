import { Module } from '@nestjs/common';
import { ShippingProvidersController } from './shipping-providers.controller';
import { ShippingProvidersService } from './shipping-providers.service';

@Module({
  controllers: [ShippingProvidersController],
  providers: [ShippingProvidersService]
})
export class ShippingProvidersModule {}
