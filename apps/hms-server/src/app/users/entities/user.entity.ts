import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Appointment } from "../../appointments/entities/appointment.entity";

export enum Role {
    ADMIN = 'ADMIN',
    DOCTOR = 'DOCTOR'
}
  
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({
    type: 'enum',
    enum: Role,
    default: Role.DOCTOR,
    })
    role: Role;

    @OneToMany(() => Appointment, (appointment) => appointment.doctor)
    appointment: Appointment[]

    @Column({ select: false })
    password: string;

}
