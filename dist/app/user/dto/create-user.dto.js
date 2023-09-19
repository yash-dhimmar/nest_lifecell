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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateUserDTO {
}
exports.CreateUserDTO = CreateUserDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        name: "user_type",
        description: "user_type(1,2)",
        example: "1",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateUserDTO.prototype, "user_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: "first_name",
        description: "name of user first_name ",
        example: "Ram",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: "last_name",
        description: "name of user last_name",
        example: "Bhagat",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(4),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: "password",
        description: "name of user password",
        example: "Ram@123",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(4),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: "email",
        description: "name of user email",
        example: "ram12@gmail.com",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Transform)(({ value }) => value.toLowerCase()),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: "city",
        description: "name of user city",
        example: "Ahmedabad",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: "state",
        description: "name of user state",
        example: "Gujarat",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: "phone",
        description: "name of user phone",
        example: "8596321478",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(10),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: "dob",
        description: "name of user date of birth",
        example: "2003-09-05",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateUserDTO.prototype, "dob", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: "qualification",
        description: "user qualification",
        example: "MBA",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "qualification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: "zone_id",
        description: "user zone_id",
        example: "1",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], CreateUserDTO.prototype, "zone_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: "center_id",
        description: "user center_id",
        example: "1",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], CreateUserDTO.prototype, "center_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: "zip_id",
        description: "user zip_id",
        example: "1",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], CreateUserDTO.prototype, "zip_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: "role_id",
        description: "user role_id",
        example: "1",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], CreateUserDTO.prototype, "role_id", void 0);
//# sourceMappingURL=create-user.dto.js.map