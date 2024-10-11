import { TestBed } from '@angular/core/testing';

import { CarmodellistService } from './carmodellist.service';

describe('CarmodellistService', () => {
  let service: CarmodellistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarmodellistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
