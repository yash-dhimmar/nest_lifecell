import { User } from "./user.entity";
import { Appointment } from "./appointment.entity";
export declare class AppointedRe {
    id: number;
    appointment_id: Appointment;
    re_id: User;
    is_reassign: boolean;
    is_relocate: boolean;
    created_at: Date;
    updated_at: Date;
}
