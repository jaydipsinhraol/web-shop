import { PaymentProvider } from '../payment-provider.interface';

export class StripeProvider implements PaymentProvider {
  async processPayment(amount: number): Promise<string> {

    // Implement Stripe payment processing logic here

    return `Stripe payment processed for amount $${amount}`;
  }
}
