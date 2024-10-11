import { TestBed } from '@angular/core/testing';

import { AccessorylistService } from './accessorylist.service';

describe('AccessorylistService', () => {
  let service: AccessorylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessorylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
