import { Lead } from "./lead.entity";
import { User } from "./user.entity";
import { DropReason } from "./dropReason.entity";
import { EnrolledUser } from "./enrolledUser.entity";
import { EmailHistory } from "./emailHistory.entity";
import { AppointedRe } from "./appointedRe.entity";
import { Rescheduleappointment } from "./rescheduleAppointment.entity";
import { MasterVoucher } from "./masterVoucher.entity";
export declare class Appointment {
    id: number;
    lead_id: Lead;
    re_id: User;
    is_presentation: boolean;
    presentation_type: string;
    drop_reason: DropReason;
    is_referral: boolean;
    referral_crm_id: string;
    is_gifted: boolean;
    status: number;
    note: string;
    voucher_id: MasterVoucher;
    created_at: Date;
    updated_at: Date;
    appointmentDetail: EnrolledUser[];
    appointmentHistory: EnrolledUser[];
    leadHistory: EmailHistory[];
    appointmentReDetails: AppointedRe[];
    RescheduleDetail: Rescheduleappointment[];
}
