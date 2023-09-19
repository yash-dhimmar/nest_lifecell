import { User } from "./user.entity";
export declare class UserToken {
    id: number;
    user: User;
    auth_token: string;
    refresh_token: string;
    created_at: Date;
    updated_at: Date;
}
