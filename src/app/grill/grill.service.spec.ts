import { TestBed } from '@angular/core/testing';

import { GrillService } from './grill.service';

describe('GrillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrillService = TestBed.get(GrillService);
    expect(service).toBeTruthy();
  });
});
