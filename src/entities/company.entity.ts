import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { MasterVoucher } from "./masterVoucher.entity";

@Entity()
export class company {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    company_name: string;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date


    @OneToMany(
        () => MasterVoucher,
        (masterVoucher) => masterVoucher.company_id,
        {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        }
    )
    companyDetail: MasterVoucher[];
}