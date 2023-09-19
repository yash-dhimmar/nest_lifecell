import { Lead } from "./lead.entity";
export declare class Medium {
    id: number;
    medium_name: string;
    created_at: Date;
    updated_at: Date;
    mediumeDetails: Lead[];
}
