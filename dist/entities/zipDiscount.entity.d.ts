import { CenterDiscount } from "./centerDiscount.entity";
export declare class ZipDiscount {
    id: number;
    discount_amount: number;
    remaining_amount: number;
    center_discount_id: CenterDiscount;
    created_at: Date;
    updated_at: Date;
}
