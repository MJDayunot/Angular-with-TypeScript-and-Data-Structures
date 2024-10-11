import { TestBed } from '@angular/core/testing';

import { SubjectlistService } from './subjectlist.service';

describe('SubjectlistService', () => {
  let service: SubjectlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
