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
exports.CenterDiscount = void 0;
const typeorm_1 = require("typeorm");
const zoneDiscount_entity_1 = require("./zoneDiscount.entity");
const zipDiscount_entity_1 = require("./zipDiscount.entity");
let CenterDiscount = exports.CenterDiscount = class CenterDiscount {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CenterDiscount.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double" }),
    __metadata("design:type", Number)
], CenterDiscount.prototype, "discount_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double" }),
    __metadata("design:type", Number)
], CenterDiscount.prototype, "remaining_amount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => zoneDiscount_entity_1.ZoneDiscount, (zoneDiscount) => zoneDiscount.zoneDiscount, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "zone_discount_id" }),
    __metadata("design:type", zoneDiscount_entity_1.ZoneDiscount)
], CenterDiscount.prototype, "zone_discount_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CenterDiscount.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CenterDiscount.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => zipDiscount_entity_1.ZipDiscount, (zipDiscount) => zipDiscount.center_discount_id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], CenterDiscount.prototype, "centerDiscount", void 0);
exports.CenterDiscount = CenterDiscount = __decorate([
    (0, typeorm_1.Entity)()
], CenterDiscount);
//# sourceMappingURL=centerDiscount.entity.js.map