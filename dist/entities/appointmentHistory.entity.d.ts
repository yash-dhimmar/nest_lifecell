import { Appointment } from "./appointment.entity";
import { User } from "./user.entity";
export declare class appointmentHistory {
    id: number;
    appointment_id: Appointment;
    status: number;
    re_id: User;
    note: string;
    created_at: Date;
    updated_at: Date;
}
