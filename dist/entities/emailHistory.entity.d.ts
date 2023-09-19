import { Email } from "./email.entity";
import { Lead } from "./lead.entity";
import { EnrolledUser } from "./enrolledUser.entity";
import { Appointment } from "./appointment.entity";
export declare class EmailHistory {
    id: number;
    appointment_id: Appointment;
    lead_id: Lead;
    enrollment_id: EnrolledUser;
    email_id: Email;
    send_email: string;
    contant: string;
    created_at: Date;
    updated_at: Date;
}
