import { UserRolePermission } from "./userRolePermission.entity";
export declare class Permission {
    id: number;
    permission_name: string;
    created_at: Date;
    updated_at: Date;
    permission: UserRolePermission[];
}
