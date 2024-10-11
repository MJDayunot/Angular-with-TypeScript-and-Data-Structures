import { TestBed } from '@angular/core/testing';

import { LaptoplistService } from './laptoplist.service';

describe('LaptoplistService', () => {
  let service: LaptoplistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaptoplistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
