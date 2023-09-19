import { Zone } from "./zone.entity";
import { Zip } from "./zip.entity";
import { User } from "./user.entity";
export declare class Center {
    id: number;
    zone_id: Zone;
    name: string;
    is_approved: boolean;
    created_at: Date;
    updated_at: Date;
    center: Zip[];
    centerDetails: User[];
}
