import { LoginDTO, ForgotPasswordDto, VerifyOtpDTO, ResetPasswordDTO } from "./dto";
import { JwtService } from "@nestjs/jwt";
import { Repository } from "typeorm";
import { User, UserToken } from "src/entities";
import { CommonService } from "src/common/common.service";
import { EmailService } from "src/common/email.service";
export declare class AdminService {
    private jwtService;
    private commonService;
    private emailService;
    private userRepository;
    private tokenRepository;
    constructor(jwtService: JwtService, commonService: CommonService, emailService: EmailService, userRepository: Repository<User>, tokenRepository: Repository<UserToken>);
    login(body: LoginDTO): Promise<{
        adminDetails: User;
        auth_token: string;
        refresh_token: string;
    }>;
    refresh_token(headers: any, body: any): Promise<{
        token: string;
    }>;
    forgot_password(body: ForgotPasswordDto): Promise<{
        auth_token: string;
        otp: number;
    }>;
    resend_otp(body: any): Promise<{
        otp: number;
    }>;
    otp_verify(body: VerifyOtpDTO): Promise<{}>;
    reset_password(body: ResetPasswordDTO): Promise<void>;
}
