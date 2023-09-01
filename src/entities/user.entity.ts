import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "smallint" })
  user_type: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  phone: string;

  @Column()
  dob: Date;

  @Column()
  qualification: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;
}
