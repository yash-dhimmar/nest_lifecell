import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { MedicalQuestion } from "./medicalQuestion.entity";

@Entity()
export class MedicalQuestionOption {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => MedicalQuestion,
    (medicalQuestion) => medicalQuestion.optionDetails,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  @JoinColumn({ name: "question_id" })
  question_id: MedicalQuestion;

  @Column()
  option: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;
}
