import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { company } from "./company.entity";
import { Appointment } from "./appointment.entity";
import { EnrolledUser } from "./enrolledUser.entity";

@Entity()
export class MasterVoucher {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => company, (company) => company.companyDetail, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
    @JoinColumn({ name: "company_id" })
    company_id: company;

    @Column()
    start_time: Date;

    @Column()
    end_time: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(
        () => Appointment,
        (masterVoucher) => masterVoucher.voucher_id,
        {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        }
    )
    apnVoucher: Appointment[];

    @OneToMany(
        () => EnrolledUser,
        (masterVoucher) => masterVoucher.voucher_id,
        {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        }
    )
    enrVoucher: EnrolledUser[];
}