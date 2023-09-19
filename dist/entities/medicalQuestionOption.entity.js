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
exports.MedicalQuestionOption = void 0;
const typeorm_1 = require("typeorm");
const medicalQuestion_entity_1 = require("./medicalQuestion.entity");
let MedicalQuestionOption = exports.MedicalQuestionOption = class MedicalQuestionOption {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MedicalQuestionOption.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => medicalQuestion_entity_1.MedicalQuestion, (medicalQuestion) => medicalQuestion.optionDetails, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "question_id" }),
    __metadata("design:type", medicalQuestion_entity_1.MedicalQuestion)
], MedicalQuestionOption.prototype, "question_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MedicalQuestionOption.prototype, "option", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], MedicalQuestionOption.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], MedicalQuestionOption.prototype, "updated_at", void 0);
exports.MedicalQuestionOption = MedicalQuestionOption = __decorate([
    (0, typeorm_1.Entity)()
], MedicalQuestionOption);
//# sourceMappingURL=medicalQuestionOption.entity.js.map