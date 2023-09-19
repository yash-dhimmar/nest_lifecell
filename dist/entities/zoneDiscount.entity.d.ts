import { MasterDiscount } from "./masterDiscount.entity";
import { CenterDiscount } from "./centerDiscount.entity";
export declare class ZoneDiscount {
    id: number;
    discount_amount: number;
    remaining_amount: number;
    discount_id: MasterDiscount;
    created_at: Date;
    updated_at: Date;
    zoneDiscount: CenterDiscount[];
}
