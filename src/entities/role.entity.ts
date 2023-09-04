import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { UserRolePermission } from "./userRolePermission.entity";
import { User } from "./user.entity";

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role_name: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @OneToMany(
    () => UserRolePermission,
    (userRolePermission) => userRolePermission.role_id,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  rolePermission: UserRolePermission[];

  @OneToMany(() => User, (user) => user.role_id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  userPermission: User[];
}
