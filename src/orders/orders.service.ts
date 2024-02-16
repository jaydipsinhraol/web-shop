import { Injectable } from '@nestjs/common';
import { PaymentProcessorsService } from '../payment-processors/payment-processors.service';

@Injectable()
export class OrdersService {
    constructor(private readonly paymentService: PaymentProcessorsService) {}

    async processOrder(providerName: string, amount: number): Promise<string> {
        // Your order processing logic here
    
        // Delegate payment processing to PaymentService
        const paymentResult = await this.paymentService.processPayment(providerName, amount);
    
        // Your remaining order processing logic
    
        return `Order processed. ${paymentResult}`;
    }

}
