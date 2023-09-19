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
exports.RolePermissionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../../entities");
const typeorm_2 = require("typeorm");
let RolePermissionService = exports.RolePermissionService = class RolePermissionService {
    constructor(roleRepository, permissionRepository, urpRepository) {
        this.roleRepository = roleRepository;
        this.permissionRepository = permissionRepository;
        this.urpRepository = urpRepository;
    }
    async create(body) {
        try {
            let { name, type, user_id } = body;
            if (type == 1) {
                const data = await this.roleRepository.find({
                    where: { role_name: body.name },
                });
                if (data.length) {
                    throw new Error("NAME_EXIT");
                }
                await this.roleRepository.save({ role_name: body.name });
            }
            else {
                const data = await this.permissionRepository.find({
                    where: { permission_name: name },
                });
                if (data.length) {
                    throw new Error("NAME_EXIT");
                }
                await this.permissionRepository.save({ permission_name: name });
            }
            return {};
        }
        catch (error) {
            throw error;
        }
    }
    async update(body) {
        try {
            const { name, id, type } = body;
            if (type == 1) {
                const checkId = await this.roleRepository.find({
                    where: { id: id },
                });
                if (!checkId.length) {
                    throw new common_1.NotFoundException("ID_NOT_FOUND");
                }
                await this.roleRepository.update({ id: id }, {
                    role_name: name,
                });
            }
            else {
                const checkId = await this.permissionRepository.find({
                    where: { id: id },
                });
                if (!checkId.length) {
                    throw new common_1.NotFoundException("ID_NOT_FOUND");
                }
                await this.permissionRepository.update({ id: id }, {
                    permission_name: name,
                });
            }
            return {};
        }
        catch (error) {
            throw error;
        }
    }
    async list(type) {
        try {
            let list = [];
            if (type == 1) {
                list = await this.roleRepository.find({ select: { id: true, role_name: true } });
            }
            else {
                list = await this.permissionRepository.find({ select: { id: true, permission_name: true } });
            }
            return list;
        }
        catch (error) {
            throw error;
        }
    }
    async getById(query) {
        try {
            let { id, type, user_id } = query, data;
            if (type == 1) {
                data = await this.roleRepository.find({
                    where: { id: id },
                    select: { id: true, role_name: true }
                });
            }
            else {
                data = await this.permissionRepository.find({
                    where: { id: id },
                    select: { id: true, permission_name: true }
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
    async delete(query) {
        try {
            let { type, id } = query;
            if (type == 1) {
                const checkId = await this.roleRepository.find({ where: { id: id } });
                if (!checkId.length) {
                    throw new common_1.NotFoundException("ID_NOT_FOUND");
                }
                await this.roleRepository.delete({ id });
            }
            else {
                const checkId = await this.permissionRepository.find({
                    where: { id: id },
                });
                if (!checkId.length) {
                    throw new common_1.NotFoundException("ID_NOT_FOUND");
                }
                await this.permissionRepository.delete({ id });
            }
            return {};
        }
        catch (error) {
            throw error;
        }
    }
    async addPermission(body) {
        try {
            let { role_id, permission_ids, user_id } = body, data = [];
            const roleDetail = await this.urpRepository.find({
                where: {
                    roleDetail: { id: role_id }
                }
            });
            if (roleDetail.length) {
                await this.urpRepository.delete({ roleDetail: { id: role_id } });
            }
            if (permission_ids.length) {
                permission_ids.map(id => {
                    data.push({
                        role_id: role_id,
                        permission_id: id
                    });
                });
            }
            await this.urpRepository.save(data);
            return {};
        }
        catch (error) {
            throw error;
        }
    }
    async listRolePermission(query) {
        try {
            let { role_id } = query;
            const rolePermissions = await this.roleRepository.findOne({
                where: {
                    id: role_id
                },
                select: {
                    id: true,
                    role_name: true,
                    rolePermission: {
                        id: true,
                        permissionDetail: {
                            id: true,
                            permission_name: true,
                        }
                    }
                },
                relations: ["rolePermission", "rolePermission.permissionDetail"]
            });
            return rolePermissions || {};
        }
        catch (error) {
            throw error;
        }
    }
    async listAllRolePermission() {
        try {
            const rolePermissions = await this.roleRepository.find({
                select: {
                    id: true,
                    role_name: true,
                    rolePermission: {
                        id: true,
                        permissionDetail: {
                            id: true,
                            permission_name: true,
                        }
                    }
                },
                relations: ["rolePermission", "rolePermission.permissionDetail"]
            });
            return rolePermissions || {};
        }
        catch (error) {
            throw error;
        }
    }
};
exports.RolePermissionService = RolePermissionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Role)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.Permission)),
    __param(2, (0, typeorm_1.InjectRepository)(entities_1.UserRolePermission)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], RolePermissionService);
//# sourceMappingURL=rolePermission.service.js.map