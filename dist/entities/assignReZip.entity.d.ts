import { User } from "./user.entity";
import { Zip } from "./zip.entity";
export declare class AssignReZip {
    id: number;
    re_id: User;
    assigned_by: User;
    zip_id: Zip;
}
