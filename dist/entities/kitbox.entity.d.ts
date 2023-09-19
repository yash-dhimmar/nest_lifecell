import { EnrolledUser } from "./enrolledUser.entity";
export declare class KitBox {
    id: number;
    name: string;
    quantity: number;
    created_at: Date;
    updated_at: Date;
    kitbox: EnrolledUser[];
}
