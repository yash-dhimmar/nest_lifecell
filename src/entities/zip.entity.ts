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
import { Center } from "./center.entity";
import { AssignReZip } from "./assignReZip.entity";
import { User } from "./user.entity";

@Entity()
export class Zip {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // center_id: number;
  @ManyToOne(() => Center, (center) => center.center, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "center_id" })
  center_id: Center;

  @Column()
  code: string;

  @Column()
  is_approved: boolean;

  @Column()
  is_active: boolean;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @OneToMany(() => AssignReZip, (assignReZip) => assignReZip.zip_id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  assignReZipdetails: AssignReZip[];

  @OneToMany(() => User, (user) => user.zip_id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  zipDetails: User[];
}
