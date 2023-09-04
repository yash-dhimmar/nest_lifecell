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
import { EnrolledUser } from "./enrolledUser.entity";

@Entity()
export class MedicalQuestionAnswer {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // appointment_id: number;
  @ManyToOne(() => EnrolledUser, (enu) => enu.medicalQuestion, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "enrollment_id" })
  enrollment_id: EnrolledUser;

  // @Column()
  // question_id: number;
  @ManyToOne(
    () => MedicalQuestion,
    (medicalQuestion) => medicalQuestion.answerDetails,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  @JoinColumn({ name: "question_id" })
  question_id: MedicalQuestion;

  @Column()
  answer: string;

  @Column()
  note: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;
}
