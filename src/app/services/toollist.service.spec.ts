import { TestBed } from '@angular/core/testing';

import { ToollistService } from './toollist.service';

describe('ToollistService', () => {
  let service: ToollistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToollistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
