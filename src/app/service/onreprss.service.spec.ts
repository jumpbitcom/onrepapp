import { TestBed } from '@angular/core/testing';

import { OnreprssService } from './onreprss.service';

describe('OnreprssService', () => {
  let service: OnreprssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnreprssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
