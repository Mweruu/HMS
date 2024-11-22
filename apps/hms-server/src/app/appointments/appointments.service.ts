import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Appointment } from './entities/appointment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppointmentsService {
  private readonly logger = new Logger(AppointmentsService.name);

  constructor(
    @InjectRepository(Appointment)
    private apptRepository: Repository<Appointment>,
  ) {}
  async create(createAppointmentDto: CreateAppointmentDto) {
    const appt = this.apptRepository.create(createAppointmentDto);
    this.logger.log(appt)
    if(appt){
      return await this.apptRepository.save(appt);
    }  }

  async findAll() {
    return await this.apptRepository.find(
      { relations: ['patient', 'doctor'] }
    );
  }

  async findOne(id: number) {
    return await this.apptRepository.findOne({where: { id},
      relations: ['patient', 'doctor'] });
  }

  async update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    const appt = await this.apptRepository.findOne({where: { id} });
    if (!appt) {
      this.logger.warn("No appt with given id")
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }

    Object.assign(appt, updateAppointmentDto);

    return await this.apptRepository.save(appt);  }

  async remove(id: number) {
    const result = await this.apptRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }  }
}
