import { TestBed } from '@angular/core/testing';

import { PodcastlistService } from './podcastlist.service';

describe('PodcastlistService', () => {
  let service: PodcastlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PodcastlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
