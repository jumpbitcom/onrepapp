import { TestBed } from '@angular/core/testing';

import { OnrepService } from './onrep.service';

describe('OnrepService', () => {
  let service: OnrepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnrepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
