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
exports.FinancePayment = void 0;
const typeorm_1 = require("typeorm");
const payment_entity_1 = require("./payment.entity");
let FinancePayment = exports.FinancePayment = class FinancePayment {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FinancePayment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => payment_entity_1.Payment, (payment) => payment.financepaymentdetails, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "payment_id" }),
    __metadata("design:type", payment_entity_1.Payment)
], FinancePayment.prototype, "payment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    __metadata("design:type", Number)
], FinancePayment.prototype, "down_payment_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "smallint" }),
    __metadata("design:type", Number)
], FinancePayment.prototype, "method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "smallint" }),
    __metadata("design:type", Number)
], FinancePayment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    __metadata("design:type", Number)
], FinancePayment.prototype, "charges", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], FinancePayment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], FinancePayment.prototype, "updated_at", void 0);
exports.FinancePayment = FinancePayment = __decorate([
    (0, typeorm_1.Entity)()
], FinancePayment);
//# sourceMappingURL=financePayment.entity.js.map