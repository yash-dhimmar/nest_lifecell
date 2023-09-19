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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const dotenv = require("dotenv");
dotenv.config();
let AuthGuard = exports.AuthGuard = class AuthGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        let token = request.headers.authorization;
        if (!token) {
            throw new common_1.UnauthorizedException("AUTH_TOKEN_REQUIRED");
        }
        try {
            if (token.startsWith("Bearer")) {
                token = token.split(" ");
                token = token[1];
            }
            const payload = await this.jwtService.verifyAsync(token, {
                secret: "secretKey",
            });
            if (payload) {
                request.body.user_id = payload.user_id;
                request.is_admin = payload.is_admin;
            }
            else
                throw new common_1.UnauthorizedException("TOKEN_MALFORMED");
            request["user"] = payload;
        }
        catch (_a) {
            throw new common_1.UnauthorizedException("TOKEN_EXPIRED");
        }
        return true;
    }
};
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthGuard);
//# sourceMappingURL=user.guard.js.map