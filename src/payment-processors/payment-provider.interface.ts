export interface PaymentProvider {
    processPayment(amount: number): Promise<string>;
}