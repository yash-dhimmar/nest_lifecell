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
export class Hospital {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  name: string;

  @Column()
  branch: string;

  @Column()
  hospital_code: string;

  @Column()
  mcr_id: string;

  @Column()
  image: string;

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

  @OneToMany(() => Lead, (lead) => lead.hospital_id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  leadDetail: Lead[];
}
