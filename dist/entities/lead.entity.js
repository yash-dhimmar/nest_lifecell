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
exports.Lead = void 0;
const typeorm_1 = require("typeorm");
const hospital_entity_1 = require("./hospital.entity");
const source_entity_1 = require("./source.entity");
const medium_entity_1 = require("./medium.entity");
const vendor_entity_1 = require("./vendor.entity");
const appointment_entity_1 = require("./appointment.entity");
const dropReason_entity_1 = require("./dropReason.entity");
const emailHistory_entity_1 = require("./emailHistory.entity");
const user_entity_1 = require("./user.entity");
let Lead = exports.Lead = class Lead {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Lead.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Lead.prototype, "cust_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Lead.prototype, "cust_mobile", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Lead.prototype, "cust_email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Lead.prototype, "cust_state", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Lead.prototype, "cust_city", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Lead.prototype, "zip_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Lead.prototype, "cust_street", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Lead.prototype, "edd", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Lead.prototype, "delivery_state", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Lead.prototype, "delivery_city", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "smallint" }),
    __metadata("design:type", Number)
], Lead.prototype, "lead_type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => hospital_entity_1.Hospital, (data) => data.leadDetail, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "hospital_id" }),
    __metadata("design:type", hospital_entity_1.Hospital)
], Lead.prototype, "hospital_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => vendor_entity_1.Vendor, (vendor) => vendor.vendor, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "vendor_id" }),
    __metadata("design:type", vendor_entity_1.Vendor)
], Lead.prototype, "vendor_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => source_entity_1.Source, (source) => source.sourceDetails, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "source" }),
    __metadata("design:type", source_entity_1.Source)
], Lead.prototype, "source", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => medium_entity_1.Medium, (medium) => medium.mediumeDetails, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "medium" }),
    __metadata("design:type", medium_entity_1.Medium)
], Lead.prototype, "medium", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dropReason_entity_1.DropReason, (dropReason) => dropReason.leadDropReasons, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "drop_reason" }),
    __metadata("design:type", dropReason_entity_1.DropReason)
], Lead.prototype, "drop_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "smallint", default: 0 }),
    __metadata("design:type", Number)
], Lead.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Lead.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.leadCreator, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "created_by" }),
    __metadata("design:type", user_entity_1.User)
], Lead.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Lead.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Lead.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => appointment_entity_1.Appointment, (appointment) => appointment.lead_id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    }),
    __metadata("design:type", Array)
], Lead.prototype, "leadDetails", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => emailHistory_entity_1.EmailHistory, (emailHistory) => emailHistory.lead_id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], Lead.prototype, "leadHistory", void 0);
exports.Lead = Lead = __decorate([
    (0, typeorm_1.Entity)()
], Lead);
//# sourceMappingURL=lead.entity.js.map