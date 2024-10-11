import { TestBed } from '@angular/core/testing';

import { ExerciselistService } from './exerciselist.service';

describe('ExerciselistService', () => {
  let service: ExerciselistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciselistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
