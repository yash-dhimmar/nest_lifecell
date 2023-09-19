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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const response_service_1 = require("../../common/response.service");
const swagger_1 = require("@nestjs/swagger");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const login_user_dto_1 = require("./dto/login-user.dto");
let UserController = exports.UserController = class UserController {
    constructor(userService, responseService) {
        this.userService = userService;
        this.responseService = responseService;
    }
    async createUser(req, res, body) {
        try {
            const data = await this.userService.createUser(body);
            return this.responseService.success(res, "USER_CREATE", data);
        }
        catch (error) {
            return this.responseService.error(req, res, error.message);
        }
    }
    async updateUserDetail(req, res, body, id) {
        try {
            const data = await this.userService.updateUserDetail(id, body);
            return this.responseService.success(res, "USER_UPDATE", data);
        }
        catch (error) {
            return this.responseService.error(req, res, error.message);
        }
    }
    async userList(req, res) {
        try {
            const data = await this.userService.userList();
            return this.responseService.success(res, "USER_LIST", data);
        }
        catch (error) {
            return this.responseService.error(req, res, error.message);
        }
    }
    async UserGetById(req, res, id) {
        try {
            const data = await this.userService.UserGetById(id);
            return this.responseService.success(res, "USER_GET_BY_ID", data);
        }
        catch (error) {
            this.responseService.error(req, res, error.message);
        }
    }
    async deleteUser(req, res, id) {
        try {
            const data = await this.userService.deleteUser(id);
            return this.responseService.success(res, "USER_DELETE", data);
        }
        catch (error) {
            this.responseService.error(req, res, error.message);
        }
    }
    async login(req, res, body) {
        try {
            const data = await this.userService.login(body);
            return this.responseService.success(res, "USER_LOGIN", data);
        }
        catch (error) {
            this.responseService.error(req, res, error.message);
        }
    }
};
__decorate([
    (0, common_1.Post)("createUser"),
    (0, swagger_1.ApiBody)({ type: create_user_dto_1.CreateUserDTO }),
    (0, swagger_1.ApiOperation)({ summary: "create User detail" }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_user_dto_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Patch)("updateUserDetail/:id"),
    (0, swagger_1.ApiBody)({ type: update_user_dto_1.UpdateUserDTO }),
    (0, swagger_1.ApiParam)({ name: "id", description: "user_id", type: "number" }),
    (0, swagger_1.ApiOperation)({ summary: "Update User detail" }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, update_user_dto_1.UpdateUserDTO, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUserDetail", null);
__decorate([
    (0, common_1.Get)("userList"),
    (0, swagger_1.ApiOperation)({ summary: "User list of data" }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "userList", null);
__decorate([
    (0, common_1.Get)("/userGetById/:id"),
    (0, swagger_1.ApiParam)({ name: "id", description: "user_id", type: "number" }),
    (0, swagger_1.ApiOperation)({ summary: "Get User detail by userId" }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "UserGetById", null);
__decorate([
    (0, common_1.Delete)("/deleteUser/:id"),
    (0, swagger_1.ApiParam)({ name: "id", description: "user_id", type: "number" }),
    (0, swagger_1.ApiOperation)({ summary: "Delete User detail" }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Post)("/login"),
    (0, swagger_1.ApiOperation)({ summary: "user login api" }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, login_user_dto_1.LoginUserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)("/users"),
    (0, swagger_1.ApiTags)("Users"),
    __metadata("design:paramtypes", [user_service_1.UserService,
        response_service_1.ResponseService])
], UserController);
//# sourceMappingURL=user.controller.js.map