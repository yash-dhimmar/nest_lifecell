import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Hospital } from "./hospital.entity"; // Import other related entities
import { Email } from "./email.entity";
import { Source } from "./source.entity";
import { Medium } from "./medium.entity";
import { Vendor } from "./vendor.entity";
import { Appointment } from "./appointment.entity";
import { DropReason } from "./dropReason.entity";
import { EmailHistory } from "./emailHistory.entity";
import { User } from "./user.entity";

@Entity()
export class Lead {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  cust_name: string;

  @Column({ nullable: true })
  cust_mobile: string;

  @Column({ nullable: true })
  cust_email: string;

  @Column({ nullable: true })
  cust_state: string;

  @Column({ nullable: true })
  cust_city: string;

  @Column({ nullable: true })
  zip_code: string;

  @Column({ nullable: true })
  cust_street: string;

  @Column({ nullable: true })
  edd: Date;

  @Column({ nullable: true })
  delivery_state: string;

  @Column({ nullable: true })
  delivery_city: string;

  // 1: tally team, 2: admin/manager, 3: self
  @Column({ type: "smallint" })
  lead_type: number;

  @ManyToOne(() => Hospital, (data) => data.leadDetail, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "hospital_id" })
  hospital_id: Hospital;

  @ManyToOne(() => Vendor, (vendor) => vendor.vendor, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "vendor_id" })
  vendor_id: Vendor;

  @ManyToOne(() => Source, (source) => source.sourceDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "source" })
  source: Source;

  @ManyToOne(() => Medium, (medium) => medium.mediumeDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "medium" })
  medium: Medium;

  @ManyToOne(() => DropReason, (dropReason) => dropReason.leadDropReasons, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "drop_reason" })
  drop_reason: DropReason;

  // 1: reached, 2: reschedule, 3: unable to contact, 4: call back, 5: enrolled, 6: payment, 7: followup, 8: dropped, 9: pending enrol
  @Column({ type: "smallint", default: 0 })
  status: number;

  @Column()
  note: string;

  @ManyToOne(() => User, (user) => user.leadCreator, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "created_by" })
  created_by: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Appointment, (appointment) => appointment.lead_id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  leadDetails: Appointment[]

  @OneToMany(
    () => EmailHistory,
    (emailHistory) => emailHistory.lead_id,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  leadHistory: EmailHistory[];
}
