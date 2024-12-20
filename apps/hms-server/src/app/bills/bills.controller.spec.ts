import { Test, TestingModule } from '@nestjs/testing';
import { BillsController } from './bills.controller';
import { BillsService } from './bills.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Bill } from './entities/bill.entity';

describe('BillsController', () => {
  let controller: BillsController;
  const mockBillRepository = {
    create: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    save: jest.fn(),
    delete: jest.fn(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillsController],
      providers: [
        BillsService,
        {
          provide: getRepositoryToken(Bill),
          useValue: mockBillRepository,
        },
      ],
    }).compile();

    controller = module.get<BillsController>(BillsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
