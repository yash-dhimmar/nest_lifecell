import { ZoneDiscount } from "./zoneDiscount.entity";
export declare class MasterDiscount {
    id: number;
    discount_amount: number;
    remaining_amount: number;
    created_by: number;
    created_at: Date;
    updated_at: Date;
    masterDiscount: ZoneDiscount[];
}
