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
exports.appointmentProduct = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
const enrolledUser_entity_1 = require("./enrolledUser.entity");
let appointmentProduct = exports.appointmentProduct = class appointmentProduct {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], appointmentProduct.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => enrolledUser_entity_1.EnrolledUser, (enu) => enu.appointmentProductDetails, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "appointment_id" }),
    __metadata("design:type", enrolledUser_entity_1.EnrolledUser)
], appointmentProduct.prototype, "enrollment_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, (product) => product.ProductDetails, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "product_id" }),
    __metadata("design:type", product_entity_1.Product)
], appointmentProduct.prototype, "product_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], appointmentProduct.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], appointmentProduct.prototype, "updated_at", void 0);
exports.appointmentProduct = appointmentProduct = __decorate([
    (0, typeorm_1.Entity)()
], appointmentProduct);
//# sourceMappingURL=appointmentProduct.entity.js.map