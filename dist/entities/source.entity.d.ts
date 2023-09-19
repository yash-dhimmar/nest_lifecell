import { Lead } from "./lead.entity";
export declare class Source {
    id: number;
    source_name: string;
    created_at: Date;
    updated_at: Date;
    sourceDetails: Lead[];
}
