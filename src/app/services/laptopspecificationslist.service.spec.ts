import { TestBed } from '@angular/core/testing';

import { LaptopspecificationslistService } from './laptopspecificationslist.service';

describe('LaptopspecificationslistService', () => {
  let service: LaptopspecificationslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaptopspecificationslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
