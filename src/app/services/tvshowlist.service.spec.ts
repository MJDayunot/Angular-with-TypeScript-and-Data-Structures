import { TestBed } from '@angular/core/testing';

import { TvshowlistService } from './tvshowlist.service';

describe('TvshowlistService', () => {
  let service: TvshowlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvshowlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
