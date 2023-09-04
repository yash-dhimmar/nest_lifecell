import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Appointment } from "./appointment.entity";
import { Lead } from "./lead.entity";

@Entity()
export class DropReason {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reason: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @OneToMany(() => Appointment, (appointment) => appointment.drop_reason, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  appoinmentDropReasons: Appointment[];

  @OneToMany(() => Lead, (lead) => lead.drop_reason, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  leadDropReasons: Appointment[];
}
