import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Appointment } from "./appointment.entity";
import { PragnancyType } from "./pragnancyType.entity";
import { KitBox } from "./kitbox.entity";
import { Payment } from "./payment.entity";
import { EmailHistory } from "./emailHistory.entity";
import { Plan } from "./plan.entity";
import { appointmentProduct } from "./appointmentProduct.entity";
import { MedicalQuestionAnswer } from "./medicalQuestionAnswer.entity";
import { MasterVoucher } from "./masterVoucher.entity";

@Entity()
export class EnrolledUser {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => Appointment,
    (appointment) => appointment.appointmentDetail,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  @JoinColumn({ name: "appointment_id" })
  appointment_id: Appointment;

  @Column({ nullable: true })
  mother_first_name: string;

  @Column({ nullable: true })
  mother_last_name: string;

  @Column({ nullable: true })
  father_first_name: string;

  @Column({ nullable: true })
  father_last_name: string;

  @Column({ type: "timestamp", nullable: true })
  mother_dob: Date;

  @Column({ type: "timestamp", nullable: true })
  anniversary_date: Date;

  @Column({ nullable: true })
  father_mobile: string;

  @Column({ nullable: true })
  mother_mobile: string;

  @Column({ nullable: true })
  alternative_email: string;

  @ManyToOne(() => PragnancyType, (dropReason) => dropReason.pragnancyType, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "pragnancy_type" })
  pragnancy_type: PragnancyType;

  @Column({ type: "smallint", default: 0 })
  is_hostpital_paid: number;

  @Column({ type: "smallint", default: 0 })
  is_vendor_paid: number;

  @Column({ nullable: true })
  shipping_address: string;

  @Column({ default: 0 })
  kitbox_status: number;

  @ManyToOne(() => KitBox, (kitbox) => kitbox.kitbox, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "kitbox_id" })
  kitbox_id: KitBox;

  @Column()
  crm_id: string;

  @ManyToOne(
    () => Plan,
    (plan) => plan.plan,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  @JoinColumn({ name: "plan_id" })
  plan_id: Plan;

  @Column({ type: "boolean", default: false })
  is_gifted: boolean;

  @ManyToOne(
    () => MasterVoucher,
    (mstVoucher) => mstVoucher.enrVoucher,
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

  @OneToMany(() => Payment, (payment) => payment.enrollment_id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  paymentdetails: Payment[];

  @OneToMany(
    () => EmailHistory,
    (emailHistory) => emailHistory.enrollment_id,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  enrollmentHistory: EmailHistory[];

  @OneToMany(
    () => appointmentProduct,
    (apnProduct) => apnProduct.enrollment_id,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  appointmentProductDetails: EmailHistory[];

  @OneToMany(
    () => MedicalQuestionAnswer,
    (mcq) => mcq.enrollment_id,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  medicalQuestion: MedicalQuestionAnswer[];
}
