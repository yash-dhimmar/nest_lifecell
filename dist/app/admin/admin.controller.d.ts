import { AdminService } from "./admin.service";
import { ResponseService } from "src/common/response.service";
import { ForgotPasswordDto, LoginDTO, ResetPasswordDTO, VerifyOtpDTO } from "./dto";
export declare class AdminController {
    private readonly adminService;
    private readonly responseService;
    constructor(adminService: AdminService, responseService: ResponseService);
    login(req: any, res: Response, body: LoginDTO): Promise<void>;
    refresh_token(req: any, res: Response): Promise<void>;
    forgot_password(req: any, res: Response, body: ForgotPasswordDto): Promise<void>;
    resend_otp(req: any, res: Response, body: any): Promise<void>;
    otp_verify(req: any, res: Response, body: VerifyOtpDTO): Promise<void>;
    reset_password(req: any, res: Response, body: ResetPasswordDTO): Promise<void>;
}
