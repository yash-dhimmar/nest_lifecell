import { Lead } from "./lead.entity";
export declare class Hospital {
    id: number;
    state: string;
    city: string;
    name: string;
    branch: string;
    hospital_code: string;
    mcr_id: string;
    image: string;
    created_by: number;
    is_approved: number;
    approved_by: number;
    created_at: Date;
    updated_at: Date;
    leadDetail: Lead[];
}
