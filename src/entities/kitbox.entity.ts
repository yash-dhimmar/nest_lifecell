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
export class KitBox {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @OneToMany(() => EnrolledUser, (enu) => enu.kitbox_id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  kitbox: EnrolledUser[];
}
