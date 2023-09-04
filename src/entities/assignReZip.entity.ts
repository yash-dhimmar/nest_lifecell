import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Zip } from "./zip.entity";

@Entity()
export class AssignReZip {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.AssignReDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "re_id" })
  re_id: User;

  @ManyToOne(() => User, (user) => user.ReAssignedby, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "assigned_by" })
  assigned_by: User;

  @ManyToOne(() => Zip, (zip) => zip.assignReZipdetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "zip_id" })
  zip_id: Zip;
}
