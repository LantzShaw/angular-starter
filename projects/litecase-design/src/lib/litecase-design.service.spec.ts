import { TestBed } from '@angular/core/testing';

import { LitecaseDesignService } from './litecase-design.service';

describe('LitecaseDesignService', () => {
  let service: LitecaseDesignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LitecaseDesignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
