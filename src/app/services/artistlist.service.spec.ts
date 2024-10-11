import { TestBed } from '@angular/core/testing';

import { ArtistlistService } from './artistlist.service';

describe('ArtistlistService', () => {
  let service: ArtistlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
