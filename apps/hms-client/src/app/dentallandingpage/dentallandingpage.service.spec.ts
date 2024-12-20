import { TestBed } from '@angular/core/testing';

import { DentallandingpageService } from './dentallandingpage.service';

describe('DentallandingpageService', () => {
  let service: DentallandingpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DentallandingpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
