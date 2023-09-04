import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Center } from "./center.entity";
import { User } from "./user.entity";

@Entity()
export class Zone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  is_approved: boolean;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @OneToMany(() => Center, (center) => center.zone_id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  zone: Center[];

  @OneToMany(() => User, (user) => user.zone_id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  zoneDetails: User[];
}
