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
import { Plan } from "./plan.entity";
import { appointmentProduct } from "./appointmentProduct.entity";


@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: number;

  @Column()
  price: number;

  @Column({ type: "boolean" })
  is_gst_applicable: Boolean;

  @Column({ nullable: true })
  gst_per: number;

  @Column({ type: "boolean" })
  is_applicable_fee: Boolean;

  @Column()
  applicable_fee: number;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @ManyToOne(() => Plan, (plan) => plan.planDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "plan_id" })
  plan_id: Plan;

  @OneToMany(
    () => appointmentProduct,
    (appointmentProduct) => appointmentProduct.product_id,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  ProductDetails: appointmentProduct[];
}
