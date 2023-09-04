import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { MedicalQuestionAnswer } from "./medicalQuestionAnswer.entity";
import { MedicalQuestionOption } from "./medicalQuestionOption.entity";

@Entity()
export class MedicalQuestion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @OneToMany(
    () => MedicalQuestionAnswer,
    (medicalQuestionAnswer) => medicalQuestionAnswer.question_id,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  answerDetails: MedicalQuestionAnswer[];

  @OneToMany(
    () => MedicalQuestionOption,
    (medicalQieytionOption) => medicalQieytionOption.question_id,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  optionDetails: MedicalQuestionOption[];
}
