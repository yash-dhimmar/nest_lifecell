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
// import { appointment } from "./appointmentt.entity";
import { FinancePayment } from "./financePayment.entity";
import { Discount } from "./discount.entity";
import { Coupon } from "./coupon.entity";
import { EnrolledUser } from "./enrolledUser.entity";

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => EnrolledUser,
    (enrolledUser) => enrolledUser.paymentdetails,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  @JoinColumn({ name: "enrollment_id" })
  enrollment_id: EnrolledUser;

  @Column({ type: "smallint" })
  method: number;

  @Column({ type: "float" })
  amount: number;

  // 0: pending, 1: complete, 2: failed
  @Column({ type: "smallint" })
  status: number;

  @Column()
  otp: number;

  @Column()
  cheque_number: string;

  @Column()
  cheque_image: string;

  @Column()
  payment_link: string;

  @Column()
  reciept_photo: string;

  @Column({ type: "smallint" })
  is_approved: number;

  @Column({ type: "smallint" })
  is_verified: number;

  @ManyToOne(() => Discount, (discount) => discount.discountdetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "discount" })
  discount: Discount;

  @ManyToOne(() => Coupon, (appointment) => appointment.coupondetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "coupon" })
  coupon: Coupon;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @OneToMany(
    () => FinancePayment,
    (financePayment) => financePayment.payment_id,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  financepaymentdetails: FinancePayment[];
}
