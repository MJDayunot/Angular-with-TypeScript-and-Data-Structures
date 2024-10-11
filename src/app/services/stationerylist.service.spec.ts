import { TestBed } from '@angular/core/testing';

import { StationerylistService } from './stationerylist.service';

describe('StationerylistService', () => {
  let service: StationerylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationerylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
