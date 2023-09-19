import { Center } from "./center.entity";
import { AssignReZip } from "./assignReZip.entity";
import { User } from "./user.entity";
export declare class Zip {
    id: number;
    center_id: Center;
    code: string;
    is_approved: boolean;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    assignReZipdetails: AssignReZip[];
    zipDetails: User[];
}
