import { Injectable } from '@nestjs/common';
import { PaymentProvider } from './payment-provider.interface';

@Injectable()
export class PaymentProcessorsService {

  private providers: Map<string, PaymentProvider> = new Map();

  registerProvider(providerName: string, provider: PaymentProvider): void {
    this.providers.set(providerName, provider);
  }

  async processPayment(providerName: string, amount: number): Promise<string> {
    const provider = this.providers.get(providerName);

    if (!provider) {
      throw new Error(`Payment provider "${providerName}" not registered.`);
    }

    return provider.processPayment(amount);
  }

}
