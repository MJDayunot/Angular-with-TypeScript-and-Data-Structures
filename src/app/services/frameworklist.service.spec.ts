import { TestBed } from '@angular/core/testing';

import { FrameworklistService } from './frameworklist.service';

describe('FrameworklistService', () => {
  let service: FrameworklistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrameworklistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
