import { TestBed } from '@angular/core/testing';

import { DevelopertoolslistService } from './developertoolslist.service';

describe('DevelopertoolslistService', () => {
  let service: DevelopertoolslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevelopertoolslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
