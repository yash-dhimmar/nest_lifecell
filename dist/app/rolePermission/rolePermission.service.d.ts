import { Permission, Role, UserRolePermission } from "src/entities";
import { Repository } from "typeorm";
import { CreateDTO, UpdateDTO } from "./dto";
export declare class RolePermissionService {
    private readonly roleRepository;
    private readonly permissionRepository;
    private readonly urpRepository;
    constructor(roleRepository: Repository<Role>, permissionRepository: Repository<Permission>, urpRepository: Repository<UserRolePermission>);
    create(body: CreateDTO): Promise<any>;
    update(body: UpdateDTO): Promise<any>;
    list(type: any): Promise<any>;
    getById(query: any): Promise<any>;
    delete(query: any): Promise<any>;
    addPermission(body: any): Promise<any>;
    listRolePermission(query: any): Promise<any>;
    listAllRolePermission(): Promise<any>;
}
