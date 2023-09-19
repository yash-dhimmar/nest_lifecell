import { User } from "./user.entity";
export declare class ActivityHistory {
    id: number;
    user_id: User;
    action: number;
    note: string;
    module: string;
    created_at: Date;
    updated_at: Date;
}
