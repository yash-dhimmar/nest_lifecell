import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { CenterDiscount } from "./centerDiscount.entity";

@Entity()
export class ZipDiscount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "double" })
  discount_amount: number;

  @Column({ type: "double" })
  remaining_amount: number;

  @ManyToOne(
    () => CenterDiscount,
    (centerDiscount) => centerDiscount.centerDiscount,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  @JoinColumn({ name: "center_discount_id" })
  center_discount_id: CenterDiscount;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
