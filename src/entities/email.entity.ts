import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { EmailHistory } from "./emailHistory.entity";

@Entity()
export class Email {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: "text" })
  contant: string;

  @Column()
  type: number;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @OneToMany(() => EmailHistory, (emailHistory) => emailHistory.email_id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  emailHistory: EmailHistory[];
}
