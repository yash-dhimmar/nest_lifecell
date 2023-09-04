import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Payment } from "./payment.entity";

@Entity()
export class FinancePayment {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // payment_id: number;
  @ManyToOne(() => Payment, (payment) => payment.financepaymentdetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "payment_id" })
  payment_id: Payment;

  @Column({ type: "float" })
  down_payment_amount: number;

  @Column({ type: "smallint" })
  method: number;

  // 0: pending, 1: complete, 2: failed
  @Column({ type: "smallint" })
  status: number;

  @Column({ type: "float" })
  charges: number;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;
}
