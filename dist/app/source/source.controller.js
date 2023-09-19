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
exports.SourceController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const response_service_1 = require("../../common/response.service");
const createSource_dto_1 = require("./dto/createSource.dto");
const updateSource_dto_1 = require("./dto/updateSource.dto");
const source_service_1 = require("./source.service");
const swagger_decorator_1 = require("../../common/swagger.decorator");
let SourceController = exports.SourceController = class SourceController {
    constructor(responseService, sourceService) {
        this.responseService = responseService;
        this.sourceService = sourceService;
    }
    async createSource(req, res, body) {
        try {
            const data = await this.sourceService.createSource(body);
            return this.responseService.success(res, "CREATE", data);
        }
        catch (error) {
            return this.responseService.error(req, res, error.message);
        }
    }
    async updateSource(req, res, body) {
        try {
            const data = await this.sourceService.updateSource(body);
            return this.responseService.success(res, "UPDATE", data);
        }
        catch (error) {
            return this.responseService.error(req, res, error.message);
        }
    }
    async sourceList(req, res) {
        try {
            const data = await this.sourceService.sourceList(req.query.type);
            return this.responseService.success(res, "LIST", data);
        }
        catch (error) {
            return this.responseService.error(req, res, error.message);
        }
    }
    async SourceGetById(req, res) {
        try {
            const data = await this.sourceService.SourceGetById(req.query);
            return this.responseService.success(res, "GET_BY_ID", data);
        }
        catch (error) {
            console.log("error========>", error);
            this.responseService.error(req, res, error.message);
        }
    }
    async deleteSource(req, res) {
        try {
            const data = await this.sourceService.deleteSource(req.query);
            return this.responseService.success(res, "DELETE", data);
        }
        catch (error) {
            console.log("error========>", error);
            this.responseService.error(req, res, error.message);
        }
    }
};
__decorate([
    (0, swagger_decorator_1.ApiOperationWithSwaggerSummary)("Create Source or Medium. For source Type =1 and for Medium type=2"),
    (0, swagger_decorator_1.ApiCommonDecorators)(),
    (0, swagger_decorator_1.ApiAuthHeaders)(),
    (0, swagger_1.ApiBody)({
        schema: {
            type: "object",
            properties: {
                type: {
                    type: "number",
                    enum: [1, 2],
                    description: "1 for source, 2 for medium",
                },
                name: { type: "string" }
            },
        },
    }),
    (0, common_1.Post)("createSource"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, createSource_dto_1.CreateSourceDTO]),
    __metadata("design:returntype", Promise)
], SourceController.prototype, "createSource", null);
__decorate([
    (0, common_1.Patch)("updateSource/:id"),
    (0, swagger_decorator_1.ApiOperationWithSwaggerSummary)("Update Source or Medium. For source Type =1 and for Medium type=2"),
    (0, swagger_decorator_1.ApiCommonDecorators)(),
    (0, swagger_decorator_1.ApiAuthHeaders)(),
    (0, swagger_1.ApiBody)({
        schema: {
            type: "object",
            properties: {
                type: {
                    type: "number",
                    enum: [1, 2],
                    description: "1 for source, 2 for medium",
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
    __metadata("design:paramtypes", [Object, Object, updateSource_dto_1.UpdateSourceDTO]),
    __metadata("design:returntype", Promise)
], SourceController.prototype, "updateSource", null);
__decorate([
    (0, common_1.Get)("sourceList"),
    (0, swagger_decorator_1.ApiOperationWithSwaggerSummary)("List Source or Medium. For source Type =1 and for Medium type=2"),
    (0, swagger_decorator_1.ApiCommonDecorators)(),
    (0, swagger_decorator_1.ApiAuthHeaders)(),
    (0, swagger_1.ApiQuery)({
        name: "type",
        enum: [1, 2],
        description: "1 for source, 2 for medium",
        type: "number",
        required: false,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SourceController.prototype, "sourceList", null);
__decorate([
    (0, common_1.Get)("/SourceGetById"),
    (0, swagger_decorator_1.ApiOperationWithSwaggerSummary)("Get detail by id for Source or Medium. For source Type =1 and for Medium type=2"),
    (0, swagger_decorator_1.ApiCommonDecorators)(),
    (0, swagger_decorator_1.ApiAuthHeaders)(),
    (0, swagger_1.ApiQuery)({
        name: "type",
        enum: [1, 2],
        description: "1 for source, 2 for medium",
        type: "number",
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: "id",
        description: "Source or Medium Id",
        type: "number",
        required: false,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SourceController.prototype, "SourceGetById", null);
__decorate([
    (0, common_1.Delete)("/deleteSource"),
    (0, swagger_decorator_1.ApiOperationWithSwaggerSummary)("Delete Source or Medium. For source Type =1 and for Medium type=2"),
    (0, swagger_decorator_1.ApiCommonDecorators)(),
    (0, swagger_decorator_1.ApiAuthHeaders)(),
    (0, swagger_1.ApiQuery)({
        name: "type",
        enum: [1, 2],
        description: "1 for source, 2 for medium",
        type: "number",
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: "id",
        description: "Source or Medium Id",
        type: "number",
        required: false,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SourceController.prototype, "deleteSource", null);
exports.SourceController = SourceController = __decorate([
    (0, common_1.Controller)("source"),
    (0, swagger_1.ApiTags)("Source_and_Medium"),
    __metadata("design:paramtypes", [response_service_1.ResponseService,
        source_service_1.SourceService])
], SourceController);
//# sourceMappingURL=source.controller.js.map