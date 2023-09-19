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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const rescheduleAppointment_entity_1 = require("./rescheduleAppointment.entity");
const assignReZip_entity_1 = require("./assignReZip.entity");
const role_entity_1 = require("./role.entity");
const task_entity_1 = require("./task.entity");
const zone_entity_1 = require("./zone.entity");
const center_entity_1 = require("./center.entity");
const zip_entity_1 = require("./zip.entity");
const appointment_entity_1 = require("./appointment.entity");
const lead_entity_1 = require("./lead.entity");
const appointmentHistory_entity_1 = require("./appointmentHistory.entity");
const userToken_entity_1 = require("./userToken.entity");
let User = exports.User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "smallint" }),
    __metadata("design:type", Number)
], User.prototype, "user_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "dob", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "qualification", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "otp", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], User.prototype, "otp_verify", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], User.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], User.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => zone_entity_1.Zone, (zone) => zone.zoneDetails, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "zone_id" }),
    __metadata("design:type", zone_entity_1.Zone)
], User.prototype, "zone_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => center_entity_1.Center, (center) => center.centerDetails, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "center_id" }),
    __metadata("design:type", center_entity_1.Center)
], User.prototype, "center_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => zip_entity_1.Zip, (zip) => zip.zipDetails, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "zip_id" }),
    __metadata("design:type", zip_entity_1.Zip)
], User.prototype, "zip_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, (role) => role.rolePermission, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "role_id" }),
    __metadata("design:type", role_entity_1.Role)
], User.prototype, "role_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => appointment_entity_1.Appointment, (appointment) => appointment.re_id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], User.prototype, "reDetails", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rescheduleAppointment_entity_1.Rescheduleappointment, (rescheduleappointment) => rescheduleappointment.re_id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], User.prototype, "AppointedReDetails", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => assignReZip_entity_1.AssignReZip, (assignReZip) => assignReZip.re_id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], User.prototype, "AssignReDetails", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => assignReZip_entity_1.AssignReZip, (rescheduleappointment) => rescheduleappointment.re_id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], User.prototype, "ReAssignedby", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => task_entity_1.Task, (task) => task.re_id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], User.prototype, "taskDetail", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => lead_entity_1.Lead, (lead) => lead.created_by, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], User.prototype, "leadCreator", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => appointmentHistory_entity_1.appointmentHistory, (appointmentHistory) => appointmentHistory.appointment_id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], User.prototype, "appointmentHistory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => appointmentHistory_entity_1.appointmentHistory, (appointmentHistory) => appointmentHistory.re_id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], User.prototype, "ReappointmentHistory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => userToken_entity_1.UserToken, (userToken) => userToken.user, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], User.prototype, "userTokenDetails", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)()
], User);
//# sourceMappingURL=user.entity.js.map