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
exports.Appointment = void 0;
const typeorm_1 = require("typeorm");
const lead_entity_1 = require("./lead.entity");
const user_entity_1 = require("./user.entity");
const dropReason_entity_1 = require("./dropReason.entity");
const enrolledUser_entity_1 = require("./enrolledUser.entity");
const emailHistory_entity_1 = require("./emailHistory.entity");
const appointedRe_entity_1 = require("./appointedRe.entity");
const rescheduleAppointment_entity_1 = require("./rescheduleAppointment.entity");
const masterVoucher_entity_1 = require("./masterVoucher.entity");
let Appointment = exports.Appointment = class Appointment {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Appointment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => lead_entity_1.Lead, (lead) => lead.leadDetails, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "lead_id" }),
    __metadata("design:type", lead_entity_1.Lead)
], Appointment.prototype, "lead_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "re_id" }),
    __metadata("design:type", user_entity_1.User)
], Appointment.prototype, "re_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "boolean" }),
    __metadata("design:type", Boolean)
], Appointment.prototype, "is_presentation", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Appointment.prototype, "presentation_type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dropReason_entity_1.DropReason, (dropReason) => dropReason.appoinmentDropReasons, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "drop_reason" }),
    __metadata("design:type", dropReason_entity_1.DropReason)
], Appointment.prototype, "drop_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "boolean" }),
    __metadata("design:type", Boolean)
], Appointment.prototype, "is_referral", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Appointment.prototype, "referral_crm_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", default: false }),
    __metadata("design:type", Boolean)
], Appointment.prototype, "is_gifted", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "smallint", default: 0 }),
    __metadata("design:type", Number)
], Appointment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Appointment.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => masterVoucher_entity_1.MasterVoucher, (mstVoucher) => mstVoucher.apnVoucher, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "voucher_id" }),
    __metadata("design:type", masterVoucher_entity_1.MasterVoucher)
], Appointment.prototype, "voucher_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Appointment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Appointment.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => enrolledUser_entity_1.EnrolledUser, (enrolledUser) => enrolledUser.appointment_id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], Appointment.prototype, "appointmentDetail", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => emailHistory_entity_1.EmailHistory, (emailHistory) => emailHistory.appointment_id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], Appointment.prototype, "appointmentHistory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => emailHistory_entity_1.EmailHistory, (emailHistory) => emailHistory.lead_id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], Appointment.prototype, "leadHistory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => appointedRe_entity_1.AppointedRe, (appointedRe) => appointedRe.appointment_id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], Appointment.prototype, "appointmentReDetails", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rescheduleAppointment_entity_1.Rescheduleappointment, (rescheduleappointment) => rescheduleappointment.appointment_id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], Appointment.prototype, "RescheduleDetail", void 0);
exports.Appointment = Appointment = __decorate([
    (0, typeorm_1.Entity)()
], Appointment);
//# sourceMappingURL=appointment.entity.js.map