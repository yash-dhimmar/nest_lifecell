import { RolePermissionService } from "./rolePermission.service";
import { ResponseService } from "src/common/response.service";
import { CreateDTO, UpdateDTO } from "./dto";
export declare class RolePermissionController {
    private readonly rolePermissionService;
    private readonly responseService;
    constructor(rolePermissionService: RolePermissionService, responseService: ResponseService);
    create(req: any, res: Response, body: CreateDTO): Promise<void>;
    update(req: any, res: Response, body: UpdateDTO): Promise<void>;
    list(req: any, res: Response): Promise<void>;
    getById(req: any, res: Response): Promise<void>;
    delete(req: any, res: Response): Promise<void>;
    addPermission(req: any, res: Response, body: any): Promise<void>;
    listPermission(req: any, res: Response): Promise<void>;
    listAllPermission(req: any, res: Response): Promise<void>;
}
