import { UserRolePermission } from "./userRolePermission.entity";
import { User } from "./user.entity";
export declare class Role {
    id: number;
    role_name: string;
    created_at: Date;
    updated_at: Date;
    rolePermission: UserRolePermission[];
    userPermission: User[];
}
