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
exports.MedicalQuestionAnswer = void 0;
const typeorm_1 = require("typeorm");
const medicalQuestion_entity_1 = require("./medicalQuestion.entity");
const enrolledUser_entity_1 = require("./enrolledUser.entity");
let MedicalQuestionAnswer = exports.MedicalQuestionAnswer = class MedicalQuestionAnswer {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MedicalQuestionAnswer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => enrolledUser_entity_1.EnrolledUser, (enu) => enu.medicalQuestion, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "enrollment_id" }),
    __metadata("design:type", enrolledUser_entity_1.EnrolledUser)
], MedicalQuestionAnswer.prototype, "enrollment_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => medicalQuestion_entity_1.MedicalQuestion, (medicalQuestion) => medicalQuestion.answerDetails, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "question_id" }),
    __metadata("design:type", medicalQuestion_entity_1.MedicalQuestion)
], MedicalQuestionAnswer.prototype, "question_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MedicalQuestionAnswer.prototype, "answer", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MedicalQuestionAnswer.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], MedicalQuestionAnswer.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], MedicalQuestionAnswer.prototype, "updated_at", void 0);
exports.MedicalQuestionAnswer = MedicalQuestionAnswer = __decorate([
    (0, typeorm_1.Entity)()
], MedicalQuestionAnswer);
//# sourceMappingURL=medicalQuestionAnswer.entity.js.map