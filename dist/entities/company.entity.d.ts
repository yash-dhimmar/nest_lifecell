import { MasterVoucher } from "./masterVoucher.entity";
export declare class company {
    id: number;
    company_name: string;
    created_at: Date;
    updated_at: Date;
    companyDetail: MasterVoucher[];
}
