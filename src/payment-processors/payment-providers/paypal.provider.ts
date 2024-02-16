// src/payment/paypal.provider.ts
import { PaymentProvider } from '../payment-provider.interface';

export class PayPalProvider implements PaymentProvider {
  async processPayment(amount: number): Promise<string> {
    // Implement PayPal payment processing logic here
    return `PayPal payment processed for amount $${amount}`;
  }
}
