import { Role } from "./role.entity";
import { Permission } from "./permission.entity";
export declare class UserRolePermission {
    id: number;
    roleDetail: Role;
    permissionDetail: Permission;
    created_at: Date;
    updated_at: Date;
}
