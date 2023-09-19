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
exports.PragnancyType = void 0;
const typeorm_1 = require("typeorm");
const enrolledUser_entity_1 = require("./enrolledUser.entity");
let PragnancyType = exports.PragnancyType = class PragnancyType {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PragnancyType.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PragnancyType.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], PragnancyType.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], PragnancyType.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => enrolledUser_entity_1.EnrolledUser, (enrolledUser) => enrolledUser.pragnancy_type, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], PragnancyType.prototype, "pragnancyType", void 0);
exports.PragnancyType = PragnancyType = __decorate([
    (0, typeorm_1.Entity)()
], PragnancyType);
//# sourceMappingURL=pragnancyType.entity.js.map