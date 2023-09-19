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
exports.MedicalQuestion = void 0;
const typeorm_1 = require("typeorm");
const medicalQuestionAnswer_entity_1 = require("./medicalQuestionAnswer.entity");
const medicalQuestionOption_entity_1 = require("./medicalQuestionOption.entity");
let MedicalQuestion = exports.MedicalQuestion = class MedicalQuestion {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MedicalQuestion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MedicalQuestion.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], MedicalQuestion.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], MedicalQuestion.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => medicalQuestionAnswer_entity_1.MedicalQuestionAnswer, (medicalQuestionAnswer) => medicalQuestionAnswer.question_id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], MedicalQuestion.prototype, "answerDetails", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => medicalQuestionOption_entity_1.MedicalQuestionOption, (medicalQieytionOption) => medicalQieytionOption.question_id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], MedicalQuestion.prototype, "optionDetails", void 0);
exports.MedicalQuestion = MedicalQuestion = __decorate([
    (0, typeorm_1.Entity)()
], MedicalQuestion);
//# sourceMappingURL=medicalQuestion.entity.js.map