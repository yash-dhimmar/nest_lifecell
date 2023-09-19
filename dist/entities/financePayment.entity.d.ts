import { Payment } from "./payment.entity";
export declare class FinancePayment {
    id: number;
    payment_id: Payment;
    down_payment_amount: number;
    method: number;
    status: number;
    charges: number;
    created_at: Date;
    updated_at: Date;
}
