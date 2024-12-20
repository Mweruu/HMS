import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { Patient } from './entities/patient.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Patient])], // Import TypeORM entities
  controllers: [PatientsController],
  providers: [PatientsService],
  exports: [TypeOrmModule, PatientsService],
})
export class PatientsModule {}
