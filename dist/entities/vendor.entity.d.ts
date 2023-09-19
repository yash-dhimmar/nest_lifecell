import { Lead } from "./lead.entity";
export declare class Vendor {
    id: number;
    state: string;
    city: string;
    name: string;
    mci_id: string;
    doctor_code: string;
    hospital_id: number;
    type: number;
    certificate: string;
    charges: string;
    image: string;
    vendor_type: number;
    created_by: number;
    is_approved: number;
    approved_by: number;
    created_at: Date;
    updated_at: Date;
    vendor: Lead[];
}
