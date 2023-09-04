import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { UserRolePermission } from "./userRolePermission.entity";

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  permission_name: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @OneToMany(
    () => UserRolePermission,
    (userRolePermission) => userRolePermission.permission_id,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  permission: UserRolePermission[];
}
