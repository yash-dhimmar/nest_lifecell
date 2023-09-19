import { ZoneDiscount } from "./zoneDiscount.entity";
import { ZipDiscount } from "./zipDiscount.entity";
export declare class CenterDiscount {
    id: number;
    discount_amount: number;
    remaining_amount: number;
    zone_discount_id: ZoneDiscount;
    created_at: Date;
    updated_at: Date;
    centerDiscount: ZipDiscount[];
}
