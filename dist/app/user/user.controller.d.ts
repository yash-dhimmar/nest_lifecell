import { UserService } from "./user.service";
import { ResponseService } from "src/common/response.service";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { LoginUserDTO } from "./dto/login-user.dto";
export declare class UserController {
    private readonly userService;
    private readonly responseService;
    constructor(userService: UserService, responseService: ResponseService);
    createUser(req: any, res: Response, body: CreateUserDTO): Promise<void>;
    updateUserDetail(req: any, res: Response, body: UpdateUserDTO, id: number): Promise<void>;
    userList(req: any, res: Response): Promise<void>;
    UserGetById(req: any, res: Response, id: number): Promise<void>;
    deleteUser(req: any, res: Response, id: number): Promise<void>;
    login(req: any, res: Response, body: LoginUserDTO): Promise<void>;
}
