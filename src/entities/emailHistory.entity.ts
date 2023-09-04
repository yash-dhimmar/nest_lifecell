import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Email } from "./email.entity";
import { Lead } from "./lead.entity";
import { EnrolledUser } from "./enrolledUser.entity";
import { Appointment } from "./appointment.entity";

@Entity()
export class EmailHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => Appointment,
    (appointment) => appointment.appointmentHistory,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  @JoinColumn({ name: "appointment_id" })
  appointment_id: Appointment;

  @ManyToOne(
    () => Lead,
    (lead) => lead.leadHistory,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  @JoinColumn({ name: "lead_id" })
  lead_id: Lead;

  @ManyToOne(
    () => EnrolledUser,
    (enu) => enu.enrollmentHistory,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  @JoinColumn({ name: "enrollment_id" })
  enrollment_id: EnrolledUser;

  @ManyToOne(() => Email, (email) => email.emailHistory, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "email_id" })
  email_id: Email;

  @Column()
  send_email: string;

  @Column({ type: "text" })
  contant: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
