import { TestBed } from '@angular/core/testing';

import { InventorylistService } from './inventorylist.service';

describe('InventorylistService', () => {
  let service: InventorylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventorylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
