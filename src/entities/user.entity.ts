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
import { Rescheduleappointment } from "./rescheduleAppointment.entity";
import { AssignReZip } from "./assignReZip.entity";
import { Role } from "./role.entity";
import { Task } from "./task.entity";
import { Zone } from "./zone.entity";
import { Center } from "./center.entity";
import { Zip } from "./zip.entity";
import { Appointment } from "./appointment.entity";
import { Lead } from "./lead.entity";
import { appointmentHistory } from "./appointmentHistory.entity";
import { UserToken } from "./userToken.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  // 1: admin
  @Column({ type: "smallint" })
  user_type: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  dob: Date;

  @Column({ nullable: true })
  qualification: string;

  @Column({ nullable: true })
  otp: number;

  @Column({default: true})
  otp_verify: boolean

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @ManyToOne(() => Zone, (zone) => zone.zoneDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "zone_id" })
  zone_id: Zone;

  @ManyToOne(() => Center, (center) => center.centerDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "center_id" })
  center_id: Center;
  // @Column()
  // zip_id: number;
  @ManyToOne(() => Zip, (zip) => zip.zipDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "zip_id" })
  zip_id: Zip;

  // @Column()
  // role_id: number;
  @ManyToOne(() => Role, (role) => role.rolePermission, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "role_id" })
  role_id: Role;

  @OneToMany(() => Appointment, (appointment) => appointment.re_id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  reDetails: Appointment[];

  @OneToMany(
    () => Rescheduleappointment,
    (rescheduleappointment) => rescheduleappointment.re_id,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  AppointedReDetails: Rescheduleappointment[];

  @OneToMany(() => AssignReZip, (assignReZip) => assignReZip.re_id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  AssignReDetails: AssignReZip[];

  @OneToMany(
    () => AssignReZip,
    (rescheduleappointment) => rescheduleappointment.re_id,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  ReAssignedby: AssignReZip[];

  /*   @OneToMany(
      () => appointmentHistory,
      (appointmentHistory) => appointmentHistory.re_id,
      {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      }
    )
    ReappointmentHistory: appointmentHistory[]; */

  @OneToMany(() => Task, (task) => task.re_id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  taskDetail: Task[];

  @OneToMany(() => Lead, (lead) => lead.created_by, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  leadCreator: Lead[];

  @OneToMany(
    () => appointmentHistory,
    (appointmentHistory) => appointmentHistory.appointment_id,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  appointmentHistory: appointmentHistory[];

  @OneToMany(
    () => appointmentHistory,
    (appointmentHistory) => appointmentHistory.re_id,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  ReappointmentHistory: appointmentHistory[];

  @OneToMany(() => UserToken, (userToken) => userToken.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  userTokenDetails: UserToken[];
}
