import { Plan } from "./plan.entity";
import { appointmentProduct } from "./appointmentProduct.entity";
export declare class Product {
    id: number;
    name: string;
    type: number;
    price: number;
    is_gst_applicable: Boolean;
    gst_per: number;
    is_applicable_fee: Boolean;
    applicable_fee: number;
    created_at: Date;
    updated_at: Date;
    plan_id: Plan;
    ProductDetails: appointmentProduct[];
}
