import { TestBed } from '@angular/core/testing';

import { ComposerlistService } from './composerlist.service';

describe('ComposerlistService', () => {
  let service: ComposerlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposerlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
