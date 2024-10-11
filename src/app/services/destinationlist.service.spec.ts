import { TestBed } from '@angular/core/testing';

import { DestinationlistService } from './destinationlist.service';

describe('DestinationlistService', () => {
  let service: DestinationlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinationlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
