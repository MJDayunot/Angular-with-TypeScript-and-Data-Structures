import { TestBed } from '@angular/core/testing';

import { FurniturelistService } from './furniturelist.service';

describe('FurniturelistService', () => {
  let service: FurniturelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FurniturelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
