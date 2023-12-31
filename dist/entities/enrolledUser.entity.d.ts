import { Appointment } from "./appointment.entity";
import { PragnancyType } from "./pragnancyType.entity";
import { KitBox } from "./kitbox.entity";
import { Payment } from "./payment.entity";
import { EmailHistory } from "./emailHistory.entity";
import { Plan } from "./plan.entity";
import { MedicalQuestionAnswer } from "./medicalQuestionAnswer.entity";
import { MasterVoucher } from "./masterVoucher.entity";
export declare class EnrolledUser {
    id: number;
    appointment_id: Appointment;
    mother_first_name: string;
    mother_last_name: string;
    father_first_name: string;
    father_last_name: string;
    mother_dob: Date;
    anniversary_date: Date;
    father_mobile: string;
    mother_mobile: string;
    alternative_email: string;
    pragnancy_type: PragnancyType;
    is_hostpital_paid: number;
    is_vendor_paid: number;
    shipping_address: string;
    kitbox_status: number;
    kitbox_id: KitBox;
    crm_id: string;
    plan_id: Plan;
    is_gifted: boolean;
    voucher_id: MasterVoucher;
    created_at: Date;
    updated_at: Date;
    paymentdetails: Payment[];
    enrollmentHistory: EmailHistory[];
    appointmentProductDetails: EmailHistory[];
    medicalQuestion: MedicalQuestionAnswer[];
}
