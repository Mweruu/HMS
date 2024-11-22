import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsEnum } from "class-validator";
import { Status } from "../entities/appointment.entity";
import { Patient } from "../../patients/entities/patient.entity";
import { User } from "../../users/entities/user.entity";

export class CreateAppointmentDto {
    @ApiProperty({
    example: 1,
    })
    @IsNotEmpty()
    patient: Patient;

    @ApiProperty({
    example: 2,
    })
    @IsNotEmpty()
    doctor: User;

    @ApiProperty({
        example: '2024-11-19',
    })
    date: Date;

    @ApiProperty({
        example: 'Scheduled',
    })
    @IsEnum(Status, {
        message: 'Valid Status required',
    })
    status: Status;
}
