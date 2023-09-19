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
exports.SourceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("../../entities");
let SourceService = exports.SourceService = class SourceService {
    constructor(sourceRepository, mediumRepository) {
        this.sourceRepository = sourceRepository;
        this.mediumRepository = mediumRepository;
    }
    async createSource(body) {
        try {
            let { name, type, user_id } = body;
            if (type == 1) {
                const data = await this.sourceRepository.find({
                    where: { source_name: body.name },
                });
                if (data.length) {
                    throw new Error("NAME_EXIT");
                }
                await this.sourceRepository.save({ source_name: body.name });
            }
            else {
                const data = await this.mediumRepository.find({
                    where: { medium_name: name },
                });
                if (data.length) {
                    throw new Error("NAME_EXIT");
                }
                await this.mediumRepository.save({ medium_name: name });
            }
            return {};
        }
        catch (error) {
            throw error;
        }
    }
    async updateSource(body) {
        try {
            const { name, id, type } = body;
            if (type == 1) {
                const checkId = await this.sourceRepository.find({
                    where: { id: id },
                });
                if (!checkId.length) {
                    throw new common_1.NotFoundException("ID_NOT_FOUND");
                }
                await this.sourceRepository.update({ id: id }, {
                    source_name: name,
                });
            }
            else {
                const checkId = await this.mediumRepository.find({
                    where: { id: id },
                });
                if (!checkId.length) {
                    throw new common_1.NotFoundException("ID_NOT_FOUND");
                }
                await this.mediumRepository.update({ id: id }, {
                    medium_name: name,
                });
            }
            return {};
        }
        catch (error) {
            throw error;
        }
    }
    async sourceList(type) {
        try {
            let list = [];
            if (type == 1) {
                list = await this.sourceRepository.find({ select: { id: true, source_name: true } });
            }
            else {
                list = await this.mediumRepository.find({ select: { id: true, medium_name: true } });
            }
            return list;
        }
        catch (error) {
            throw error;
        }
    }
    async SourceGetById(query) {
        try {
            let { id, type, user_id } = query, data;
            if (type == 1) {
                data = await this.sourceRepository.find({
                    where: { id: id },
                    select: { id: true, source_name: true }
                });
            }
            else {
                data = await this.mediumRepository.find({
                    where: { id: id },
                    select: { id: true, medium_name: true }
                });
            }
            if (!data.length) {
                throw new common_1.NotFoundException("ID_NOT_FOUND");
            }
            return data;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteSource(query) {
        try {
            let { type, id } = query;
            if (type == 1) {
                const checkId = await this.sourceRepository.find({ where: { id: id } });
                if (!checkId.length) {
                    throw new common_1.NotFoundException("ID_NOT_FOUND");
                }
                await this.sourceRepository.delete({ id });
            }
            else {
                const checkId = await this.mediumRepository.find({ where: { id: id } });
                if (!checkId.length) {
                    throw new common_1.NotFoundException("ID_NOT_FOUND");
                }
                await this.mediumRepository.delete({ id });
            }
            return {};
        }
        catch (error) {
            throw error;
        }
    }
};
exports.SourceService = SourceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Source)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.Medium)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SourceService);
//# sourceMappingURL=source.service.js.map