import { MedicalQuestionAnswer } from "./medicalQuestionAnswer.entity";
import { MedicalQuestionOption } from "./medicalQuestionOption.entity";
export declare class MedicalQuestion {
    id: number;
    question: string;
    created_at: Date;
    updated_at: Date;
    answerDetails: MedicalQuestionAnswer[];
    optionDetails: MedicalQuestionOption[];
}
