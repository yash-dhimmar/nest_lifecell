import { Appointment } from "./appointment.entity";
export declare class DropReason {
    id: number;
    reason: string;
    created_at: Date;
    updated_at: Date;
    appoinmentDropReasons: Appointment[];
    leadDropReasons: Appointment[];
}
