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
import { ZoneDiscount } from "./zoneDiscount.entity";
import { ZipDiscount } from "./zipDiscount.entity";

@Entity()
export class CenterDiscount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "double" })
  discount_amount: number;

  @Column({ type: "double" })
  remaining_amount: number;

  @ManyToOne(() => ZoneDiscount, (zoneDiscount) => zoneDiscount.zoneDiscount, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "zone_discount_id" })
  zone_discount_id: ZoneDiscount;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(
    () => ZipDiscount,
    (zipDiscount) => zipDiscount.center_discount_id,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  centerDiscount: ZipDiscount[];
}
