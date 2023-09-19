import { EmailHistory } from "./emailHistory.entity";
export declare class Email {
    id: number;
    name: string;
    contant: string;
    type: number;
    created_at: Date;
    updated_at: Date;
    emailHistory: EmailHistory[];
}
