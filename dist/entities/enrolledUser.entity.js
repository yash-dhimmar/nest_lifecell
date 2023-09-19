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
exports.EnrolledUser = void 0;
const typeorm_1 = require("typeorm");
const appointment_entity_1 = require("./appointment.entity");
const pragnancyType_entity_1 = require("./pragnancyType.entity");
const kitbox_entity_1 = require("./kitbox.entity");
const payment_entity_1 = require("./payment.entity");
const emailHistory_entity_1 = require("./emailHistory.entity");
const plan_entity_1 = require("./plan.entity");
const appointmentProduct_entity_1 = require("./appointmentProduct.entity");
const medicalQuestionAnswer_entity_1 = require("./medicalQuestionAnswer.entity");
const masterVoucher_entity_1 = require("./masterVoucher.entity");
let EnrolledUser = exports.EnrolledUser = class EnrolledUser {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EnrolledUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => appointment_entity_1.Appointment, (appointment) => appointment.appointmentDetail, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "appointment_id" }),
    __metadata("design:type", appointment_entity_1.Appointment)
], EnrolledUser.prototype, "appointment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], EnrolledUser.prototype, "mother_first_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], EnrolledUser.prototype, "mother_last_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], EnrolledUser.prototype, "father_first_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], EnrolledUser.prototype, "father_last_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", nullable: true }),
    __metadata("design:type", Date)
], EnrolledUser.prototype, "mother_dob", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", nullable: true }),
    __metadata("design:type", Date)
], EnrolledUser.prototype, "anniversary_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], EnrolledUser.prototype, "father_mobile", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], EnrolledUser.prototype, "mother_mobile", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], EnrolledUser.prototype, "alternative_email", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pragnancyType_entity_1.PragnancyType, (dropReason) => dropReason.pragnancyType, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "pragnancy_type" }),
    __metadata("design:type", pragnancyType_entity_1.PragnancyType)
], EnrolledUser.prototype, "pragnancy_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "smallint", default: 0 }),
    __metadata("design:type", Number)
], EnrolledUser.prototype, "is_hostpital_paid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "smallint", default: 0 }),
    __metadata("design:type", Number)
], EnrolledUser.prototype, "is_vendor_paid", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], EnrolledUser.prototype, "shipping_address", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], EnrolledUser.prototype, "kitbox_status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => kitbox_entity_1.KitBox, (kitbox) => kitbox.kitbox, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "kitbox_id" }),
    __metadata("design:type", kitbox_entity_1.KitBox)
], EnrolledUser.prototype, "kitbox_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EnrolledUser.prototype, "crm_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => plan_entity_1.Plan, (plan) => plan.plan, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "plan_id" }),
    __metadata("design:type", plan_entity_1.Plan)
], EnrolledUser.prototype, "plan_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", default: false }),
    __metadata("design:type", Boolean)
], EnrolledUser.prototype, "is_gifted", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => masterVoucher_entity_1.MasterVoucher, (mstVoucher) => mstVoucher.enrVoucher, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "voucher_id" }),
    __metadata("design:type", masterVoucher_entity_1.MasterVoucher)
], EnrolledUser.prototype, "voucher_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EnrolledUser.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EnrolledUser.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => payment_entity_1.Payment, (payment) => payment.enrollment_id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], EnrolledUser.prototype, "paymentdetails", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => emailHistory_entity_1.EmailHistory, (emailHistory) => emailHistory.enrollment_id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], EnrolledUser.prototype, "enrollmentHistory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => appointmentProduct_entity_1.appointmentProduct, (apnProduct) => apnProduct.enrollment_id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], EnrolledUser.prototype, "appointmentProductDetails", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => medicalQuestionAnswer_entity_1.MedicalQuestionAnswer, (mcq) => mcq.enrollment_id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], EnrolledUser.prototype, "medicalQuestion", void 0);
exports.EnrolledUser = EnrolledUser = __decorate([
    (0, typeorm_1.Entity)()
], EnrolledUser);
//# sourceMappingURL=enrolledUser.entity.js.map