import { Payment } from "./payment.entity";
export declare class Coupon {
    id: number;
    title: string;
    description: string;
    term_and_condition: string;
    expiry_date: Date;
    coupon_code: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    coupondetails: Payment[];
}
