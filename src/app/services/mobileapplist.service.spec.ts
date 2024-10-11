import { TestBed } from '@angular/core/testing';

import { MobileapplistService } from './mobileapplist.service';

describe('MobileapplistService', () => {
  let service: MobileapplistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileapplistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
