import { TestBed } from '@angular/core/testing';

import { PaintinglistService } from './paintinglist.service';

describe('PaintinglistService', () => {
  let service: PaintinglistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaintinglistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
