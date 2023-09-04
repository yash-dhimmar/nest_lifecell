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
import { MasterDiscount } from "./masterDiscount.entity";
import { CenterDiscount } from "./centerDiscount.entity";

@Entity()
export class ZoneDiscount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "double" })
  discount_amount: number;

  @Column({ type: "double" })
  remaining_amount: number;

  @ManyToOne(
    () => MasterDiscount,
    (masterDiscount) => masterDiscount.masterDiscount,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  @JoinColumn({ name: "discount_id" })
  discount_id: MasterDiscount;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(
    () => CenterDiscount,
    (centerDiscount) => centerDiscount.zone_discount_id,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  zoneDiscount: CenterDiscount[];
}
