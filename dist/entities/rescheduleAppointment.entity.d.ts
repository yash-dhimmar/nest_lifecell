import { Appointment } from "./appointment.entity";
import { User } from "./user.entity";
export declare class Rescheduleappointment {
    id: number;
    re_id: User;
    appointment_id: Appointment;
    time: Date;
    is_followup: boolean;
    reason: string;
    type: number;
    created_at: Date;
    updated_at: Date;
}
