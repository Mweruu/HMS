import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsEnum, IsAlphanumeric } from "class-validator";
import { Gender } from "../entities/patient.entity";

export class CreatePatientDto {
    @ApiProperty({
    example: 'Jane',
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        example: '1999-12-25',
    })
    @IsNotEmpty()
    dob: Date;

    @ApiProperty({
        example: 'Female',
    })
    @IsEnum(Gender, {
        message: 'Valid Gender required',
    })
    @IsNotEmpty()
    gender: Gender;

    @ApiProperty({
        example: '0710998834',
    })
    @IsAlphanumeric()
    @IsNotEmpty()
    address: string;
}
