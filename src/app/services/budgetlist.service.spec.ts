import { TestBed } from '@angular/core/testing';

import { BudgetlistService } from './budgetlist.service';

describe('BudgetlistService', () => {
  let service: BudgetlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
