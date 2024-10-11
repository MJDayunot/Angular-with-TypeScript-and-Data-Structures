import { TestBed } from '@angular/core/testing';

import { PresentationlistService } from './presentationlist.service';

describe('PresentationlistService', () => {
  let service: PresentationlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresentationlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
