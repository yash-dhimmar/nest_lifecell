import { Product } from "./product.entity";
import { EnrolledUser } from "./enrolledUser.entity";
export declare class Plan {
    id: number;
    name: string;
    type: number;
    is_gst_applicable: Boolean;
    gst_per: number;
    is_applicable_fee: Boolean;
    applicable_fee: number;
    created_at: Date;
    updated_at: Date;
    planDetails: Product[];
    plan: EnrolledUser[];
}
