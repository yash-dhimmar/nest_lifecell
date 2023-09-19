import { MedicalQuestion } from "./medicalQuestion.entity";
export declare class MedicalQuestionOption {
    id: number;
    question_id: MedicalQuestion;
    option: string;
    created_at: Date;
    updated_at: Date;
}
