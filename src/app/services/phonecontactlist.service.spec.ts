import { TestBed } from '@angular/core/testing';

import { PhonecontactlistService } from './phonecontactlist.service';

describe('PhonecontactlistService', () => {
  let service: PhonecontactlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhonecontactlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
