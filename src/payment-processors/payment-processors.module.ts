import { Module, OnModuleInit } from '@nestjs/common';
import { PaymentProcessorsController } from './payment-processors.controller';
import { PaymentProcessorsService } from './payment-processors.service';
import { StripeProvider } from './payment-providers/stripe.provider';
import { BraintreeProvider } from './payment-providers/braintree.provider';
import { PayPalProvider } from './payment-providers/paypal.provider';

@Module({
  controllers: [PaymentProcessorsController],
  providers: [
    PaymentProcessorsService,
    StripeProvider,
    BraintreeProvider,
    PayPalProvider
  ]
})
export class PaymentProcessorsModule implements OnModuleInit {
  constructor(private readonly paymentProcessorsService: PaymentProcessorsService) {}

  onModuleInit() {
    // Register payment providers
    this.paymentProcessorsService.registerProvider('stripe', new StripeProvider());
    this.paymentProcessorsService.registerProvider('braintree', new BraintreeProvider());
    this.paymentProcessorsService.registerProvider('paypal', new PayPalProvider());

  }
}
