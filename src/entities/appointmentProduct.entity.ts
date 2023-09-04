import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Product } from "./product.entity";
import { EnrolledUser } from "./enrolledUser.entity";

@Entity()
export class appointmentProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => EnrolledUser,
    (enu) => enu.appointmentProductDetails,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  @JoinColumn({ name: "appointment_id" })
  enrollment_id: EnrolledUser;

  @ManyToOne(() => Product, (product) => product.ProductDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "product_id" })
  product_id: Product;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;
}
