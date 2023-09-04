import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Lead } from "./lead.entity";

@Entity()
export class Vendor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  name: string;

  @Column()
  mci_id: string;

  @Column()
  doctor_code: string;

  @Column()
  hospital_id: number;

  @Column()
  type: number;

  @Column()
  certificate: string;

  @Column()
  charges: string;

  @Column()
  image: string;

  @Column()
  vendor_type: number;

  @Column()
  created_by: number;

  @Column()
  is_approved: number;

  @Column()
  approved_by: number;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @OneToMany(() => Lead, (lead) => lead.vendor_id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  vendor: Lead[];
}
