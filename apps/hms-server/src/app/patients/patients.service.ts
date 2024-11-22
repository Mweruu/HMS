import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PatientsService {
  private readonly logger = new Logger(PatientsService.name);

  constructor(
    @InjectRepository(Patient)
    private patientRepository: Repository<Patient>
  ){}

  async create(createPatientDto: CreatePatientDto) {
    const patient = this.patientRepository.create(createPatientDto);
    this.logger.log(patient)
    if(patient){
      return await this.patientRepository.save(patient);
    }  }

  async findAll() {
    return await this.patientRepository.find();
  }

  async findOne(id: number) {
    return await this.patientRepository.findOne({ where: {id}});
  }

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    const patient = await this.patientRepository.findOne({where: {id}})
    if(!patient) {
      this.logger.warn("No patient with given id")
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }
    Object.assign(patient, updatePatientDto);
    return await this.patientRepository.save(patient)
  }

  async remove(id: number) {
    const result = await this.patientRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }  }
}
