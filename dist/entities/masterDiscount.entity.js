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
exports.MasterDiscount = void 0;
const typeorm_1 = require("typeorm");
const zoneDiscount_entity_1 = require("./zoneDiscount.entity");
let MasterDiscount = exports.MasterDiscount = class MasterDiscount {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MasterDiscount.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double" }),
    __metadata("design:type", Number)
], MasterDiscount.prototype, "discount_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double" }),
    __metadata("design:type", Number)
], MasterDiscount.prototype, "remaining_amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], MasterDiscount.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MasterDiscount.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MasterDiscount.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => zoneDiscount_entity_1.ZoneDiscount, (zoneDiscount) => zoneDiscount.discount_id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], MasterDiscount.prototype, "masterDiscount", void 0);
exports.MasterDiscount = MasterDiscount = __decorate([
    (0, typeorm_1.Entity)()
], MasterDiscount);
//# sourceMappingURL=masterDiscount.entity.js.map