import { TestBed } from '@angular/core/testing';

import { LanguagelistService } from './languagelist.service';

describe('LanguagelistService', () => {
  let service: LanguagelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguagelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
