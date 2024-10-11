import { TestBed } from '@angular/core/testing';

import { ComputerhardwarelistService } from './computerhardwarelist.service';

describe('ComputerhardwarelistService', () => {
  let service: ComputerhardwarelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputerhardwarelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
