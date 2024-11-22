import { PrimaryGeneratedColumn, Column, ManyToOne, Entity } from "typeorm";
import { Patient } from "../../patients/entities/patient.entity";
import { User } from "../../users/entities/user.entity";


export enum Status {
    Scheduled = 'Scheduled',
    Completed = 'Completed'
  }
  
@Entity()
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Patient, (patient) => patient.appointment)
    patient: Patient;

    @ManyToOne(() => User, (user) => user.appointment)
    doctor: User;

    @Column({})
    date: Date;

    @Column({
    type: 'enum',
    enum: Status,
    default: Status.Scheduled,
    })
    status: Status;
}
