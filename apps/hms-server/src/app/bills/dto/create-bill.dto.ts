import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsEmail, IsEnum } from "class-validator";
import { Status } from "../entities/bill.entity";
import { Patient } from "../../patients/entities/patient.entity";

export class CreateBillDto {
    @ApiProperty({
    example: 1,
    })
    @IsNotEmpty()
    patient: Patient;

    @ApiProperty({
        example: '6000',
    })
    @IsEmail()
    amount: number;

    @ApiProperty({
        example: 'Paid',
    })
    @IsEnum(Status, {
        message: 'Valid Status required',
    })
    status: Status;


}
