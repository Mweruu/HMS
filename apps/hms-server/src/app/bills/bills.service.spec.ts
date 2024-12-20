import { Test, TestingModule } from '@nestjs/testing';
import { BillsService } from './bills.service';
import { Bill } from './entities/bill.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('BillsService', () => {
  let service: BillsService;
  const mockBillRepository = {
    create: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    save: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BillsService,
        {
          provide: getRepositoryToken(Bill),
          useValue: mockBillRepository,
        },
      ],
    }).compile();

    service = module.get<BillsService>(BillsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
