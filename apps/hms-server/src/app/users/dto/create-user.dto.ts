import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../entities/user.entity";
import {
    IsAlphanumeric,
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsString,
  } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({
    example: 'Mweru123',
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        example: 'mweru@gmail.com',
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        example: 'DOCTOR',
    })
    @IsEnum(Role, {
        message: 'Valid Role required',
    })
    role: Role;

    @ApiProperty({
        example: 'Mweru123',
    })
    @IsAlphanumeric()
    password: string;
}

