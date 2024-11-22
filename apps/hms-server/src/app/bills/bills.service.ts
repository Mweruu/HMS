import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { Bill } from './entities/bill.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BillsService {

  private readonly logger = new Logger(BillsService.name);

  constructor(
    @InjectRepository(Bill)
    private billRepository: Repository<Bill>,
  ) {}

  async create(createBillDto: CreateBillDto) {
    const bill = this.billRepository.create(createBillDto);
    this.logger.log(bill)
    if(bill){
      return await this.billRepository.save(bill);
    }  }

  async findAll() {
    return await this.billRepository.find({relations: ['patient']});
  }

  async findOne(id: number) {
    return await this.billRepository.findOne({where: {id},
    relations: ['patient']});
  }

  async update(id: number, updateBillDto: UpdateBillDto) {
    const bill = await this.billRepository.findOne({where: { id} });
    this.logger.log("returned bill ====", bill)
    if (!bill) {
      this.logger.warn("No bill with given id")
      throw new NotFoundException(`Bill with ID ${id} not found`);
    }

    Object.assign(bill, updateBillDto);

    return await this.billRepository.save(bill);  
  }b

  async remove(id: number) {
    const result = await this.billRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Bill with ID ${id} not found`);
    }  
  }
}
