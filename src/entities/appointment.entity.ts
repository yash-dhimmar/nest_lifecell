import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Lead } from "./lead.entity";
import { User } from "./user.entity";
import { DropReason } from "./dropReason.entity";
import { EnrolledUser } from "./enrolledUser.entity";
import { EmailHistory } from "./emailHistory.entity";
import { AppointedRe } from "./appointedRe.entity";
import { Rescheduleappointment } from "./rescheduleAppointment.entity";
import { MasterVoucher } from "./masterVoucher.entity";

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Lead, (lead) => lead.leadDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "lead_id" })
  lead_id: Lead;

  @ManyToOne(() => User, (user) => user.id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "re_id" })
  re_id: User;

  @Column({ nullable: true, type: "boolean" })
  is_presentation: boolean;

  @Column({ nullable: true })
  presentation_type: string;

  @ManyToOne(
    () => DropReason,
    (dropReason) => dropReason.appoinmentDropReasons,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  @JoinColumn({ name: "drop_reason" })
  drop_reason: DropReason;

  @Column({ nullable: true, type: "boolean" })
  is_referral: boolean;

  @Column()
  referral_crm_id: string;

  @Column({ type: "boolean", default: false })
  is_gifted: boolean;

  // 1: reached, 2: reschedule, 3: unable to contact, 4: call back, 5: enrolled, 6: payment, 7: followup, 8: dropped, 9: pending enrol
  @Column({ type: "smallint", default: 0 })
  status: number;

  @Column({ nullable: true })
  note: string;

  @ManyToOne(
    () => MasterVoucher,
    (mstVoucher) => mstVoucher.apnVoucher,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  @JoinColumn({ name: "voucher_id" })
  voucher_id: MasterVoucher;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(
    () => EnrolledUser,
    (enrolledUser) => enrolledUser.appointment_id,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  appointmentDetail: EnrolledUser[];

  @OneToMany(
    () => EmailHistory,
    (emailHistory) => emailHistory.appointment_id,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  appointmentHistory: EnrolledUser[];

  @OneToMany(
    () => EmailHistory,
    (emailHistory) => emailHistory.lead_id,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  leadHistory: EmailHistory[];

  @OneToMany(() => AppointedRe, (appointedRe) => appointedRe.appointment_id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  appointmentReDetails: AppointedRe[];

  @OneToMany(
    () => Rescheduleappointment,
    (rescheduleappointment) => rescheduleappointment.appointment_id,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  RescheduleDetail: Rescheduleappointment[];
}
