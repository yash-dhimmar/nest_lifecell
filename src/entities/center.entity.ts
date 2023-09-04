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
import { Zone } from "./zone.entity";
import { Zip } from "./zip.entity";
import { User } from "./user.entity";

@Entity()
export class Center {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // zone_id: number;
  @ManyToOne(() => Zone, (zone) => zone.zone, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "zone_id" })
  zone_id: Zone;

  @Column()
  name: string;

  @Column()
  is_approved: boolean;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @OneToMany(() => Zip, (zip) => zip.center_id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  center: Zip[];

  @OneToMany(() => User, (user) => user.center_id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  centerDetails: User[];
}
