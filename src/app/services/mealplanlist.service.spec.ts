import { TestBed } from '@angular/core/testing';

import { MealplanlistService } from './mealplanlist.service';

describe('MealplanlistService', () => {
  let service: MealplanlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealplanlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
