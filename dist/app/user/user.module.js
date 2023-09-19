"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_controller_1 = require("./user.controller");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const dotenv = require("dotenv");
const response_service_1 = require("../../common/response.service");
const user_entity_1 = require("../../entities/user.entity");
const zone_entity_1 = require("../../entities/zone.entity");
const center_entity_1 = require("../../entities/center.entity");
const zip_entity_1 = require("../../entities/zip.entity");
const role_entity_1 = require("../../entities/role.entity");
const entities_1 = require("../../entities");
dotenv.config();
let AuthenticationModule = exports.AuthenticationModule = class AuthenticationModule {
};
exports.AuthenticationModule = AuthenticationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, zone_entity_1.Zone, center_entity_1.Center, zip_entity_1.Zip, role_entity_1.Role, entities_1.UserToken]),
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService, jwt_1.JwtService, response_service_1.ResponseService],
        exports: [typeorm_1.TypeOrmModule],
    })
], AuthenticationModule);
//# sourceMappingURL=user.module.js.map