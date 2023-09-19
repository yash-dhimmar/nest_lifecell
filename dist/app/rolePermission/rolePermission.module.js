"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolePermissionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const dotenv = require("dotenv");
const response_service_1 = require("../../common/response.service");
const multer_config_1 = require("../../config/multer.config");
const platform_express_1 = require("@nestjs/platform-express");
const rolePermission_controller_1 = require("./rolePermission.controller");
const rolePermission_service_1 = require("./rolePermission.service");
const entities_1 = require("../../entities");
dotenv.config();
let RolePermissionModule = exports.RolePermissionModule = class RolePermissionModule {
};
exports.RolePermissionModule = RolePermissionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Role, entities_1.Permission, entities_1.UserRolePermission]), platform_express_1.MulterModule.register(multer_config_1.multerConfig)],
        controllers: [rolePermission_controller_1.RolePermissionController],
        providers: [rolePermission_service_1.RolePermissionService, jwt_1.JwtService, response_service_1.ResponseService],
        exports: [typeorm_1.TypeOrmModule],
    })
], RolePermissionModule);
//# sourceMappingURL=rolePermission.module.js.map