import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Role } from "./role.entity";
import { Permission } from "./permission.entity";

@Entity()
export class UserRolePermission {
  @PrimaryGeneratedColumn()
  id: number;

  //   @Column()
  //   role_id: number;
  @ManyToOne(() => Role, (role) => role.rolePermission, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "role_id" })
  role_id: Role;

  // @Column()
  // permission_id: number;
  @ManyToOne(() => Permission, (permission) => permission.permission, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "permission_id" })
  permission_id: Permission;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;
}
