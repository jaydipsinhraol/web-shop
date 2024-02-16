import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { PaymentProcessorsService } from 'src/payment-processors/payment-processors.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, PaymentProcessorsService]
})
export class OrdersModule {}
