import { Module } from '@nestjs/common';
import { BillsService } from './bills.service';
import { BillsController } from './bills.controller';
import { Bill } from './entities/bill.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Bill])], // Import TypeORM entities
  controllers: [BillsController],
  providers: [BillsService],
  exports: [TypeOrmModule, BillsService],
})

export class BillsModule {}
