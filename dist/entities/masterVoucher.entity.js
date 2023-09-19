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
exports.MasterVoucher = void 0;
const typeorm_1 = require("typeorm");
const company_entity_1 = require("./company.entity");
const appointment_entity_1 = require("./appointment.entity");
const enrolledUser_entity_1 = require("./enrolledUser.entity");
let MasterVoucher = exports.MasterVoucher = class MasterVoucher {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MasterVoucher.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.company, (company) => company.companyDetail, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "company_id" }),
    __metadata("design:type", company_entity_1.company)
], MasterVoucher.prototype, "company_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], MasterVoucher.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], MasterVoucher.prototype, "end_time", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MasterVoucher.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MasterVoucher.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => appointment_entity_1.Appointment, (masterVoucher) => masterVoucher.voucher_id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], MasterVoucher.prototype, "apnVoucher", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => enrolledUser_entity_1.EnrolledUser, (masterVoucher) => masterVoucher.voucher_id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], MasterVoucher.prototype, "enrVoucher", void 0);
exports.MasterVoucher = MasterVoucher = __decorate([
    (0, typeorm_1.Entity)()
], MasterVoucher);
//# sourceMappingURL=masterVoucher.entity.js.map