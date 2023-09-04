import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Payment } from "./payment.entity";

@Entity()
export class Discount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  discount_type: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column()
  applicable_zip_code: string;

  @Column()
  is_approved: boolean;

  @Column({ type: "boolean", default: false })
  is_storage: boolean;

  @Column()
  created_by: number;

  @Column()
  rejection_reason: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @OneToMany(() => Payment, (payment) => payment.discount, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  discountdetails: Payment[];
}
