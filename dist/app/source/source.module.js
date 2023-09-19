"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceMediumModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const response_service_1 = require("../../common/response.service");
const source_entity_1 = require("../../entities/source.entity");
const source_controller_1 = require("./source.controller");
const source_service_1 = require("./source.service");
const entities_1 = require("../../entities");
const jwt_1 = require("@nestjs/jwt");
let SourceMediumModule = exports.SourceMediumModule = class SourceMediumModule {
};
exports.SourceMediumModule = SourceMediumModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([source_entity_1.Source, entities_1.Medium])],
        controllers: [source_controller_1.SourceController],
        providers: [source_service_1.SourceService, jwt_1.JwtService, response_service_1.ResponseService],
    })
], SourceMediumModule);
//# sourceMappingURL=source.module.js.map