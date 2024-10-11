import { TestBed } from '@angular/core/testing';

import { AnimallistService } from './animallist.service';

describe('AnimallistService', () => {
  let service: AnimallistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimallistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
