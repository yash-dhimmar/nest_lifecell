import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  // OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Product } from "./product.entity";
import { EnrolledUser } from "./enrolledUser.entity";

@Entity()
export class Plan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: number;

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

  @OneToMany(() => Product, (product) => product.plan_id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  planDetails: Product[];

  @OneToMany(() => EnrolledUser, (enu) => enu.plan_id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  plan: EnrolledUser[];
}
