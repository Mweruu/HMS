import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";
import { Appointment } from "../../appointments/entities/appointment.entity";
import { Bill } from "../../bills/entities/bill.entity";

export enum Gender {
    Male = 'Male',
    Female = 'Female'
}

@Entity()
export class Patient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    dob: Date;

    @Column({
    type: 'enum',
    enum: Gender,
    default: Gender.Male,
    })
    gender: Gender;

    @OneToMany(() => Appointment, (appointment) => appointment.patient)
    appointment: Appointment[]

    @OneToMany(() => Bill, (bill) => bill.patient)
    bill: Bill[]

    @Column()
    address: string;
}
