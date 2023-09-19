import { Product } from "./product.entity";
import { EnrolledUser } from "./enrolledUser.entity";
export declare class appointmentProduct {
    id: number;
    enrollment_id: EnrolledUser;
    product_id: Product;
    created_at: Date;
    updated_at: Date;
}
