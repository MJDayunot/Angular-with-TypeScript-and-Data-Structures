import { TestBed } from '@angular/core/testing';

import { ClassroomlistService } from './classroomlist.service';

describe('ClassroomlistService', () => {
  let service: ClassroomlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassroomlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
