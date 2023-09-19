import { User } from "./user.entity";
export declare class Task {
    id: number;
    reason: Date;
    start_time: Date;
    end_time: Date;
    re_id: User;
    created_at: Date;
    updated_at: Date;
}
