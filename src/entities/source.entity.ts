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
export class Source {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  source_name: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @OneToMany(() => Lead, (lead) => lead.source, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  sourceDetails: Lead[];
}
