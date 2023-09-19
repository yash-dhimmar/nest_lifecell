import { MedicalQuestion } from "./medicalQuestion.entity";
import { EnrolledUser } from "./enrolledUser.entity";
export declare class MedicalQuestionAnswer {
    id: number;
    enrollment_id: EnrolledUser;
    question_id: MedicalQuestion;
    answer: string;
    note: string;
    created_at: Date;
    updated_at: Date;
}
