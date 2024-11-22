import { PrimaryGeneratedColumn, Column, ManyToOne, Entity } from "typeorm";
import { Patient } from "../../patients/entities/patient.entity";

export enum Status {
    Paid = 'Paid',
    Pending = 'Pending'
  }

@Entity()
export class Bill {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Patient, (patient) => patient.bill)
    patient: Patient;

    @Column()
    amount: number;

    @Column({
    type: 'enum',
    enum: Status,
    default: Status.Paid,
    })
    status: Status;
}
