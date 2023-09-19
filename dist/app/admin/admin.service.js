"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const md5 = require("md5");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("../../entities");
const common_service_1 = require("../../common/common.service");
const email_service_1 = require("../../common/email.service");
let AdminService = exports.AdminService = class AdminService {
    constructor(jwtService, commonService, emailService, userRepository, tokenRepository) {
        this.jwtService = jwtService;
        this.commonService = commonService;
        this.emailService = emailService;
        this.userRepository = userRepository;
        this.tokenRepository = tokenRepository;
    }
    async login(body) {
        try {
            let { email, password } = body;
            password = md5(password);
            const adminDetails = await this.userRepository.findOne({
                where: { email: email, user_type: 1 },
                select: { id: true, email: true, password: true, otp_verify: true }
            });
            if (!adminDetails)
                throw new common_1.UnauthorizedException("INVALID_EMAIL");
            console.log(adminDetails);
            if (adminDetails.password != password)
                throw new common_1.UnauthorizedException("INVALID_PASSWORD");
            const auth_token = await this.jwtService.sign({ user_id: adminDetails.id, is_admin: 1 }, { secret: "secretKey", expiresIn: process.env.JWT_EXPIRE_TIME });
            const refresh_token = await this.jwtService.sign({ user_id: adminDetails.id, is_admin: 1 }, { secret: "secretKey", expiresIn: process.env.REFRESH_EXPIRE_TIME });
            const userDetails = await this.tokenRepository.findOne({
                where: { user: { id: adminDetails.id } },
            });
            if (userDetails) {
                await this.tokenRepository.update({ user: { id: adminDetails.id } }, {
                    auth_token,
                    refresh_token
                });
            }
            else {
                await this.tokenRepository.save({
                    user: { id: adminDetails.id },
                    user_id: adminDetails.id,
                    auth_token,
                    refresh_token,
                });
            }
            return { adminDetails, auth_token, refresh_token };
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async refresh_token(headers, body) {
        try {
            const refresh_token = await this.tokenRepository.findOne({
                where: {
                    user: { id: body.user_id },
                }
            });
            console.log(headers.refresh_token);
            console.log(refresh_token.refresh_token);
            if (headers.refresh_token !== refresh_token.refresh_token) {
                throw new common_1.UnauthorizedException("REFRESH_MALFORMED");
            }
            const token = await this.jwtService.sign({ user_id: body.user_id, is_admin: 1 }, { secret: "secretKey", expiresIn: process.env.JWT_EXPIRE_TIME });
            await this.tokenRepository.update({ user: { id: body.user_id } }, { auth_token: token });
            return { token: token };
        }
        catch (error) {
            throw error;
        }
    }
    async forgot_password(body) {
        try {
            let { email } = body;
            const adminDetails = await this.userRepository.findOne({
                where: { email: email },
                select: { id: true, email: true, password: true },
            });
            if (!adminDetails)
                throw new common_1.UnauthorizedException("INVALID_EMAIL");
            const otp = await this.commonService.generateOtp(4);
            const userDetail = await this.userRepository.update(adminDetails.id, {
                otp: otp,
                otp_verify: false,
            });
            console.log(userDetail);
            const paylaod = {
                OTP: otp
            };
            if (userDetail)
                await this.emailService.sendMail(email, paylaod);
            let auth_token;
            if (adminDetails.user_type = 1) {
                auth_token = await this.jwtService.sign({ user_id: adminDetails.id, is_admin: 1 }, { secret: "secretKey", expiresIn: process.env.JWT_EXPIRE_TIME });
            }
            else {
                auth_token = await this.jwtService.sign({ user_id: adminDetails.id, is_admin: 0 }, { secret: "secretKey", expiresIn: process.env.JWT_EXPIRE_TIME });
            }
            return { auth_token, otp };
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async resend_otp(body) {
        try {
            let { user_id } = body;
            const userDetail = await this.userRepository.findOne({
                where: { id: user_id },
                select: { id: true, email: true }
            });
            const otp = await this.commonService.generateOtp(4);
            const paylaod = {
                OTP: otp
            };
            if (userDetail)
                await this.emailService.sendMail(userDetail.email, paylaod);
            await this.userRepository.update(user_id, {
                otp: otp,
                otp_verify: false,
            });
            return { otp };
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async otp_verify(body) {
        try {
            let { user_id, otp } = body;
            const userDetail = await this.userRepository.findOne({
                where: { id: user_id, otp: otp },
                select: { id: true, email: true }
            });
            if (!userDetail) {
                throw {
                    message: "INCORRECT_OTP",
                    code: 401
                };
            }
            await this.userRepository.update(user_id, { otp_verify: true });
            return {};
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async reset_password(body) {
        try {
            let { password, user_id } = body;
            password = md5(password);
            const userDetail = await this.userRepository.findOne({
                where: { id: user_id },
                select: { id: true, email: true }
            });
            if (password == userDetail.password)
                throw {
                    message: "OLD_NEW_PASSWORD_SAME",
                    code: 403
                };
            await this.userRepository.update(user_id, { password: password });
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
};
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, typeorm_1.InjectRepository)(entities_1.User)),
    __param(4, (0, typeorm_1.InjectRepository)(entities_1.UserToken)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        common_service_1.CommonService,
        email_service_1.EmailService,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AdminService);
//# sourceMappingURL=admin.service.js.map