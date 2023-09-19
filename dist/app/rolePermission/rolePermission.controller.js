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
exports.RolePermissionController = void 0;
const common_1 = require("@nestjs/common");
const rolePermission_service_1 = require("./rolePermission.service");
const response_service_1 = require("../../common/response.service");
const swagger_1 = require("@nestjs/swagger");
const swagger_decorator_1 = require("../../common/swagger.decorator");
const dto_1 = require("./dto");
let RolePermissionController = exports.RolePermissionController = class RolePermissionController {
    constructor(rolePermissionService, responseService) {
        this.rolePermissionService = rolePermissionService;
        this.responseService = responseService;
    }
    async create(req, res, body) {
        try {
            const data = await this.rolePermissionService.create(body);
            return this.responseService.success(res, "CREATE", data);
        }
        catch (error) {
            return this.responseService.error(req, res, error.message);
        }
    }
    async update(req, res, body) {
        try {
            const data = await this.rolePermissionService.update(body);
            return this.responseService.success(res, "UPDATE", data);
        }
        catch (error) {
            return this.responseService.error(req, res, error.message);
        }
    }
    async list(req, res) {
        try {
            const data = await this.rolePermissionService.list(req.query.type);
            return this.responseService.success(res, "LIST", data);
        }
        catch (error) {
            return this.responseService.error(req, res, error.message);
        }
    }
    async getById(req, res) {
        try {
            const data = await this.rolePermissionService.getById(req.query);
            return this.responseService.success(res, "GET_BY_ID", data);
        }
        catch (error) {
            console.log("error========>", error);
            this.responseService.error(req, res, error.message);
        }
    }
    async delete(req, res) {
        try {
            const data = await this.rolePermissionService.delete(req.query);
            return this.responseService.success(res, "DELETE", data);
        }
        catch (error) {
            console.log("error========>", error);
            this.responseService.error(req, res, error.message);
        }
    }
    async addPermission(req, res, body) {
        try {
            const data = await this.rolePermissionService.addPermission(body);
            return this.responseService.success(res, "CREATE", data);
        }
        catch (error) {
            console.log("error========>", error);
            this.responseService.error(req, res, error.message);
        }
    }
    async listPermission(req, res) {
        try {
            const data = await this.rolePermissionService.listRolePermission(req.query);
            return this.responseService.success(res, "LIST", data);
        }
        catch (error) {
            console.log("error========>", error);
            this.responseService.error(req, res, error.message);
        }
    }
    async listAllPermission(req, res) {
        try {
            const data = await this.rolePermissionService.listAllRolePermission();
            return this.responseService.success(res, "LIST", data);
        }
        catch (error) {
            console.log("error========>", error);
            this.responseService.error(req, res, error.message);
        }
    }
};
__decorate([
    (0, swagger_decorator_1.ApiOperationWithSwaggerSummary)("Create Role or Permission. For Role Type =1 and for Perission type=2"),
    (0, swagger_decorator_1.ApiCommonDecorators)(),
    (0, swagger_decorator_1.ApiAuthHeaders)(),
    (0, swagger_1.ApiBody)({
        schema: {
            type: "object",
            properties: {
                type: {
                    type: "number",
                    enum: [1, 2],
                    description: "1 for Role, 2 for Permission",
                },
                name: { type: "string" }
            },
        },
    }),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, dto_1.CreateDTO]),
    __metadata("design:returntype", Promise)
], RolePermissionController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)("update/:id"),
    (0, swagger_decorator_1.ApiOperationWithSwaggerSummary)("Update Role or Permission. For role Type =1 and for permission type=2"),
    (0, swagger_decorator_1.ApiCommonDecorators)(),
    (0, swagger_decorator_1.ApiAuthHeaders)(),
    (0, swagger_1.ApiBody)({
        schema: {
            type: "object",
            properties: {
                type: {
                    type: "number",
                    enum: [1, 2],
                    description: "1 for Role, 2 for Permission",
                },
                name: { type: "string" },
                id: { type: "number" }
            },
        },
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, dto_1.UpdateDTO]),
    __metadata("design:returntype", Promise)
], RolePermissionController.prototype, "update", null);
__decorate([
    (0, common_1.Get)("list"),
    (0, swagger_decorator_1.ApiOperationWithSwaggerSummary)("List Role or Permission. For Role Type =1 and for Permission type=2"),
    (0, swagger_decorator_1.ApiCommonDecorators)(),
    (0, swagger_decorator_1.ApiAuthHeaders)(),
    (0, swagger_1.ApiQuery)({
        name: "type",
        enum: [1, 2],
        description: "1 for Role, 2 for Permission",
        type: "number",
        required: false,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RolePermissionController.prototype, "list", null);
__decorate([
    (0, common_1.Get)("/getById"),
    (0, swagger_decorator_1.ApiOperationWithSwaggerSummary)("Get detail by id for Role or Permission. For Role Type =1 and for Permission type=2"),
    (0, swagger_decorator_1.ApiCommonDecorators)(),
    (0, swagger_decorator_1.ApiAuthHeaders)(),
    (0, swagger_1.ApiQuery)({
        name: "type",
        enum: [1, 2],
        description: "1 for Role, 2 for Permission",
        type: "number",
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: "id",
        description: "Role or Permission Id",
        type: "number",
        required: false,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RolePermissionController.prototype, "getById", null);
__decorate([
    (0, common_1.Delete)("/delete"),
    (0, swagger_decorator_1.ApiOperationWithSwaggerSummary)("Delete Role or Permission. For Role Type =1 and for Permission type=2"),
    (0, swagger_decorator_1.ApiCommonDecorators)(),
    (0, swagger_decorator_1.ApiAuthHeaders)(),
    (0, swagger_1.ApiQuery)({
        name: "type",
        enum: [1, 2],
        description: "1 for Role, 2 for Permission",
        type: "number",
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: "id",
        description: "Role or Permission Id",
        type: "number",
        required: false,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RolePermissionController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)("/addPermission"),
    (0, swagger_decorator_1.ApiOperationWithSwaggerSummary)("Add persmission to Role by ids"),
    (0, swagger_decorator_1.ApiCommonDecorators)(),
    (0, swagger_decorator_1.ApiAuthHeaders)(),
    (0, swagger_1.ApiBody)({
        schema: {
            type: "object",
            properties: {
                role_id: { type: "number" },
                permission_ids: {
                    type: "array",
                    items: { type: "number" }
                }
            },
        },
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], RolePermissionController.prototype, "addPermission", null);
__decorate([
    (0, common_1.Get)("/listPermissions"),
    (0, swagger_decorator_1.ApiOperationWithSwaggerSummary)("List of permissions which is assoiciated with Role"),
    (0, swagger_decorator_1.ApiCommonDecorators)(),
    (0, swagger_decorator_1.ApiAuthHeaders)(),
    (0, swagger_1.ApiQuery)({
        name: "role_id",
        description: "Role ID",
        type: "number",
        required: true,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RolePermissionController.prototype, "listPermission", null);
__decorate([
    (0, common_1.Get)("/listAllRolePermission"),
    (0, swagger_decorator_1.ApiOperationWithSwaggerSummary)("List all role with its permissions"),
    (0, swagger_decorator_1.ApiCommonDecorators)(),
    (0, swagger_decorator_1.ApiAuthHeaders)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RolePermissionController.prototype, "listAllPermission", null);
exports.RolePermissionController = RolePermissionController = __decorate([
    (0, common_1.Controller)("/rolePermission"),
    (0, swagger_1.ApiTags)("Role-Permission"),
    __metadata("design:paramtypes", [rolePermission_service_1.RolePermissionService,
        response_service_1.ResponseService])
], RolePermissionController);
//# sourceMappingURL=rolePermission.controller.js.map