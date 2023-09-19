import { Center } from "./center.entity";
import { User } from "./user.entity";
export declare class Zone {
    id: number;
    name: string;
    is_approved: boolean;
    created_at: Date;
    updated_at: Date;
    zone: Center[];
    zoneDetails: User[];
}
