import { TestBed } from '@angular/core/testing';

import { VegetablelistService } from './vegetablelist.service';

describe('VegetablelistService', () => {
  let service: VegetablelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VegetablelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
