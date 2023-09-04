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
export class Medium {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  medium_name: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @OneToMany(() => Lead, (lead) => lead.medium, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  mediumeDetails: Lead[];
}
