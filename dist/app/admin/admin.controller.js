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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const response_service_1 = require("../../common/response.service");
const swagger_1 = require("@nestjs/swagger");
const swagger_decorator_1 = require("../../common/swagger.decorator");
const dto_1 = require("./dto");
const refresh_guard_1 = require("../../guard/refresh.guard");
let AdminController = exports.AdminController = class AdminController {
    constructor(adminService, responseService) {
        this.adminService = adminService;
        this.responseService = responseService;
    }
    async login(req, res, body) {
        try {
            const data = await this.adminService.login(body);
            this.responseService.success(res, "SUCCESS", data);
        }
        catch (error) {
            if (error.status) {
                this.responseService.error(req, res, error.message, error.status);
            }
            else {
                this.responseService.error(req, res, error.message);
            }
        }
    }
    async refresh_token(req, res) {
        try {
            const data = await this.adminService.refresh_token(req.headers, req.body);
            this.responseService.success(res, "TOKEN_REFRESHED", data);
        }
        catch (error) {
            console.log(error);
            if (error.status) {
                this.responseService.error(req, res, error.message, error.status);
            }
            else {
                this.responseService.error(req, res, error.message);
            }
        }
    }
    async forgot_password(req, res, body) {
        try {
            const data = await this.adminService.forgot_password(body);
            this.responseService.success(res, "SUCCESS", data);
        }
        catch (error) {
            if (error.status) {
                this.responseService.error(req, res, error.message, error.status);
            }
            else {
                this.responseService.error(req, res, error.message);
            }
        }
    }
    async resend_otp(req, res, body) {
        try {
            const data = await this.adminService.resend_otp(body);
            this.responseService.success(res, "SUCCESS", data);
        }
        catch (error) {
            if (error.status) {
                this.responseService.error(req, res, error.message, error.status);
            }
            else {
                this.responseService.error(req, res, error.message);
            }
        }
    }
    async otp_verify(req, res, body) {
        try {
            const data = await this.adminService.otp_verify(body);
            this.responseService.success(res, "SUCCESS", data);
        }
        catch (error) {
            if (error.status) {
                this.responseService.error(req, res, error.message, error.status);
            }
            else {
                this.responseService.error(req, res, error.message);
            }
        }
    }
    async reset_password(req, res, body) {
        try {
            const data = await this.adminService.reset_password(body);
            this.responseService.success(res, "SUCCESS", data);
        }
        catch (error) {
            if (error.status) {
                this.responseService.error(req, res, error.message, error.status);
            }
            else {
                this.responseService.error(req, res, error.message);
            }
        }
    }
};
__decorate([
    (0, common_1.Post)("/login"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, swagger_decorator_1.ApiOperationWithSwaggerSummary)("Admin Login"),
    (0, swagger_decorator_1.ApiCommonResponses)(),
    (0, swagger_1.ApiBody)({
        schema: {
            type: "object",
            properties: {
                email: { type: "string" },
                password: { type: "string" },
            },
        },
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, dto_1.LoginDTO]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "login", null);
__decorate([
    (0, common_1.Post)("/refresh_token"),
    (0, common_1.UseGuards)(refresh_guard_1.RefreshGuard),
    (0, swagger_decorator_1.ApiOperationWithSwaggerSummary)("Refresh Token"),
    (0, swagger_decorator_1.ApiCommonResponses)(),
    (0, swagger_1.ApiHeader)({
        name: "refresh_token",
        description: "Enter refresh-token",
        required: true,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "refresh_token", null);
__decorate([
    (0, common_1.Post)("/forgot_password"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, swagger_decorator_1.ApiOperationWithSwaggerSummary)("Forgot Password"),
    (0, swagger_decorator_1.ApiCommonResponses)(),
    (0, swagger_1.ApiBody)({
        schema: {
            type: "object",
            properties: {
                email: { type: "string" },
            },
        },
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, dto_1.ForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "forgot_password", null);
__decorate([
    (0, common_1.Post)("/resend_otp"),
    (0, swagger_decorator_1.ApiOperationWithSwaggerSummary)("resend otp"),
    (0, swagger_decorator_1.ApiCommonDecorators)(),
    (0, swagger_decorator_1.ApiAuthHeaders)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "resend_otp", null);
__decorate([
    (0, common_1.Post)("/otp_verify"),
    (0, swagger_decorator_1.ApiOperationWithSwaggerSummary)("resend otp"),
    (0, swagger_decorator_1.ApiCommonDecorators)(),
    (0, swagger_decorator_1.ApiAuthHeaders)(),
    (0, swagger_1.ApiBody)({
        schema: {
            type: "object",
            properties: {
                otp: { type: "number" },
            },
        },
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, dto_1.VerifyOtpDTO]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "otp_verify", null);
__decorate([
    (0, common_1.Post)("/reset_password"),
    (0, swagger_decorator_1.ApiOperationWithSwaggerSummary)("reset password"),
    (0, swagger_decorator_1.ApiCommonDecorators)(),
    (0, swagger_decorator_1.ApiAuthHeaders)(),
    (0, swagger_1.ApiBody)({
        schema: {
            type: "object",
            properties: {
                password: { type: "string" },
            },
        },
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, dto_1.ResetPasswordDTO]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "reset_password", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)("/admin"),
    (0, swagger_1.ApiTags)("Admin"),
    __metadata("design:paramtypes", [admin_service_1.AdminService,
        response_service_1.ResponseService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map