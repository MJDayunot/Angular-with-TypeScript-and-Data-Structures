import { TestBed } from '@angular/core/testing';

import { LecturelistService } from './lecturelist.service';

describe('LecturelistService', () => {
  let service: LecturelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LecturelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
