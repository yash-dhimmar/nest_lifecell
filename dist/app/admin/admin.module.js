"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const dotenv = require("dotenv");
const response_service_1 = require("../../common/response.service");
const admin_controller_1 = require("./admin.controller");
const admin_service_1 = require("./admin.service");
const entities_1 = require("../../entities");
const common_service_1 = require("../../common/common.service");
const email_service_1 = require("../../common/email.service");
dotenv.config();
let AdminModule = exports.AdminModule = class AdminModule {
};
exports.AdminModule = AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.User, entities_1.UserToken])],
        controllers: [admin_controller_1.AdminController],
        providers: [admin_service_1.AdminService, jwt_1.JwtService, response_service_1.ResponseService, common_service_1.CommonService, email_service_1.EmailService],
        exports: [typeorm_1.TypeOrmModule],
    })
], AdminModule);
//# sourceMappingURL=admin.module.js.map