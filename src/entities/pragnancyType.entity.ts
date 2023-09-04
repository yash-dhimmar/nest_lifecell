import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { EnrolledUser } from "./enrolledUser.entity";

@Entity()
export class PragnancyType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @OneToMany(
    () => EnrolledUser,
    (enrolledUser) => enrolledUser.pragnancy_type,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  pragnancyType: EnrolledUser[];
}
