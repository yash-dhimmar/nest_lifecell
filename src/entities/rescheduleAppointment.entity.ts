import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Appointment } from "./appointment.entity";
import { User } from "./user.entity";

@Entity()
export class Rescheduleappointment {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // re_id: number;
  @ManyToOne(() => User, (user) => user.AppointedReDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "re_id" })
  re_id: User;

  @ManyToOne(() => Appointment, (appointment) => appointment.RescheduleDetail, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "appointment_id" })
  appointment_id: Appointment;

  @Column()
  time: Date;

  @Column()
  is_followup: boolean;

  @Column()
  reason: string;

  @Column({ type: "smallint" })
  type: number;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;
}
