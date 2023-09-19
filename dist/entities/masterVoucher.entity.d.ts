import { company } from "./company.entity";
import { Appointment } from "./appointment.entity";
import { EnrolledUser } from "./enrolledUser.entity";
export declare class MasterVoucher {
    id: number;
    company_id: company;
    start_time: Date;
    end_time: Date;
    created_at: Date;
    updated_at: Date;
    apnVoucher: Appointment[];
    enrVoucher: EnrolledUser[];
}
