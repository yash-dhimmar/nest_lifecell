import { Payment } from "./payment.entity";
export declare class Discount {
    id: number;
    discount_type: string;
    title: string;
    description: string;
    start_date: Date;
    end_date: Date;
    applicable_zip_code: string;
    is_approved: boolean;
    is_storage: boolean;
    created_by: number;
    rejection_reason: string;
    created_at: Date;
    updated_at: Date;
    discountdetails: Payment[];
}
