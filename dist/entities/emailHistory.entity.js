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
exports.EmailHistory = void 0;
const typeorm_1 = require("typeorm");
const email_entity_1 = require("./email.entity");
const lead_entity_1 = require("./lead.entity");
const enrolledUser_entity_1 = require("./enrolledUser.entity");
const appointment_entity_1 = require("./appointment.entity");
let EmailHistory = exports.EmailHistory = class EmailHistory {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EmailHistory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => appointment_entity_1.Appointment, (appointment) => appointment.appointmentHistory, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "appointment_id" }),
    __metadata("design:type", appointment_entity_1.Appointment)
], EmailHistory.prototype, "appointment_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => lead_entity_1.Lead, (lead) => lead.leadHistory, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "lead_id" }),
    __metadata("design:type", lead_entity_1.Lead)
], EmailHistory.prototype, "lead_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => enrolledUser_entity_1.EnrolledUser, (enu) => enu.enrollmentHistory, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "enrollment_id" }),
    __metadata("design:type", enrolledUser_entity_1.EnrolledUser)
], EmailHistory.prototype, "enrollment_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => email_entity_1.Email, (email) => email.emailHistory, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "email_id" }),
    __metadata("design:type", email_entity_1.Email)
], EmailHistory.prototype, "email_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EmailHistory.prototype, "send_email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], EmailHistory.prototype, "contant", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EmailHistory.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EmailHistory.prototype, "updated_at", void 0);
exports.EmailHistory = EmailHistory = __decorate([
    (0, typeorm_1.Entity)()
], EmailHistory);
//# sourceMappingURL=emailHistory.entity.js.map