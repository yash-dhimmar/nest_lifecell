import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ZoneDiscount } from "./zoneDiscount.entity";

@Entity()
export class MasterDiscount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "double" })
  discount_amount: number;

  @Column({ type: "double" })
  remaining_amount: number;

  @Column()
  created_by: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => ZoneDiscount, (zoneDiscount) => zoneDiscount.discount_id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  masterDiscount: ZoneDiscount[];
}
