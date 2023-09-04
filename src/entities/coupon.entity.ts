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
export class Coupon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  term_and_condition: string;

  @Column()
  expiry_date: Date;

  @Column()
  coupon_code: string;

  @Column()
  is_active: boolean;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @OneToMany(() => Payment, (payment) => payment.discount, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  coupondetails: Payment[];
}
