import { TestBed } from '@angular/core/testing';

import { OnrepstorageService } from './onrepstorage.service';

describe('OnrepstorageService', () => {
  let service: OnrepstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnrepstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
