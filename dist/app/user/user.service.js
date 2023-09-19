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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../entities/user.entity");
const typeorm_2 = require("typeorm");
const md5 = require("md5");
const crypto = require("crypto");
const zone_entity_1 = require("../../entities/zone.entity");
const center_entity_1 = require("../../entities/center.entity");
const zip_entity_1 = require("../../entities/zip.entity");
const role_entity_1 = require("../../entities/role.entity");
const entities_1 = require("../../entities");
let UserService = exports.UserService = class UserService {
    constructor(jwtService, userRepository, zoneRepository, centerRepository, zipRepository, roleRepository, tokenRepository) {
        this.jwtService = jwtService;
        this.userRepository = userRepository;
        this.zoneRepository = zoneRepository;
        this.centerRepository = centerRepository;
        this.zipRepository = zipRepository;
        this.roleRepository = roleRepository;
        this.tokenRepository = tokenRepository;
    }
    async createUser(body) {
        try {
            const data = await this.userRepository.find({
                where: { email: body.email },
            });
            if (data.length) {
                throw new common_1.NotFoundException("USER_EMAIL_EXIT");
            }
            const checkZoneId = await this.zoneRepository.find({
                where: { id: body.zone_id },
            });
            if (!checkZoneId.length) {
                throw new common_1.NotFoundException("ZONE_ID_NOT_FOUND");
            }
            const checkCenterId = await this.centerRepository.find({
                where: { id: body.center_id },
            });
            if (!checkCenterId.length) {
                throw new common_1.NotFoundException("CENTER_ID_NOT_FOUND");
            }
            const checkZipId = await this.zipRepository.find({
                where: { id: body.zip_id },
            });
            if (!checkZipId.length) {
                throw new common_1.NotFoundException("ZIP_ID_NOT_FOUND");
            }
            const checkRoleId = await this.roleRepository.find({
                where: { id: body.role_id },
            });
            if (!checkRoleId.length) {
                throw new common_1.NotFoundException("ROLE_ID_NOT_FOUND");
            }
            body.password = md5(body.password);
            const user_create = await this.userRepository.save(body);
            return user_create;
        }
        catch (error) {
            throw error;
        }
    }
    async updateUserDetail(user_id, body) {
        try {
            const { first_name, last_name, email, city, state, phone, dob, qualification, zone_id, center_id, zip_id, role_id, } = body;
            const checkId = await this.userRepository.find({
                where: { id: user_id },
            });
            if (!checkId.length) {
                throw new common_1.NotFoundException("USER_ID_NOT_FOUND");
            }
            const checkZoneId = await this.zoneRepository.find({
                where: { id: body.zone_id },
            });
            if (!checkZoneId.length) {
                throw new common_1.NotFoundException("ZONE_ID_NOT_FOUND");
            }
            const checkCenterId = await this.centerRepository.find({
                where: { id: body.center_id },
            });
            if (!checkCenterId.length) {
                throw new common_1.NotFoundException("CENTER_ID_NOT_FOUND");
            }
            const checkZipId = await this.zipRepository.find({
                where: { id: body.zip_id },
            });
            if (!checkZipId.length) {
                throw new common_1.NotFoundException("ZIP_ID_NOT_FOUND");
            }
            const checkRoleId = await this.roleRepository.find({
                where: { id: body.role_id },
            });
            if (!checkRoleId.length) {
                throw new common_1.NotFoundException("ROLE_ID_NOT_FOUND");
            }
            await this.userRepository.update({ id: user_id }, {
                first_name,
                last_name,
                email,
                city,
                state,
                phone,
                dob,
                qualification,
                zone_id,
                center_id,
                zip_id,
                role_id,
            });
            return {};
        }
        catch (error) {
            throw error;
        }
    }
    async userList() {
        try {
            const userList = await this.userRepository.find({});
            console.log("userList=====>", userList);
            return userList;
        }
        catch (error) {
            throw error;
        }
    }
    async UserGetById(id) {
        try {
            const data = await this.userRepository.find({
                where: { id: id },
            });
            if (!data.length) {
                throw new common_1.NotFoundException("USER_ID_NOT_FOUND");
            }
            return data;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteUser(id) {
        try {
            const checkId = await this.userRepository.find({ where: { id: id } });
            if (!checkId.length) {
                throw new common_1.NotFoundException("USER_ID_NOT_FOUND");
            }
            await this.userRepository.delete({ id });
            return {};
        }
        catch (error) {
            throw error;
        }
    }
    async login(body) {
        try {
            const checkEmail = await this.userRepository.find({
                where: { email: body.email },
            });
            console.log("checkEmail======>", checkEmail);
            if (!checkEmail.length) {
                throw new common_1.NotFoundException("INVALID_EMAIL");
            }
            const login_attempt_hashed = crypto
                .createHash("md5")
                .update(body.password)
                .digest("hex");
            if (login_attempt_hashed === checkEmail[0].password) {
                const auth_token = this.jwtService.sign({ user_id: checkEmail.id }, { secret: "secretKey", expiresIn: process.env.JWT_EXPIRE_TIME });
                const refresh_token = await this.jwtService.sign({ user_id: checkEmail.id }, { secret: "secretKey", expiresIn: process.env.REFRESH_EXPIRE_TIME });
                const userDetails = await this.tokenRepository.findOne({
                    where: { user: { id: checkEmail.id } },
                });
                console.log("data=========>", userDetails);
                if (userDetails) {
                    const data = await this.tokenRepository.update({ user: { id: checkEmail.id } }, {
                        auth_token,
                        refresh_token,
                    });
                    console.log("data=========>", checkEmail[0].User[0].id);
                }
                else {
                }
                return { checkEmail, auth_token, refresh_token };
            }
            throw new common_1.NotFoundException("INVALID_PASSWORD");
        }
        catch (error) {
            throw error;
        }
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(zone_entity_1.Zone)),
    __param(3, (0, typeorm_1.InjectRepository)(center_entity_1.Center)),
    __param(4, (0, typeorm_1.InjectRepository)(zip_entity_1.Zip)),
    __param(5, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __param(6, (0, typeorm_1.InjectRepository)(entities_1.UserToken)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map