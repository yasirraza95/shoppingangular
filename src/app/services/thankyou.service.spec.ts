import { TestBed } from '@angular/core/testing';

import { ThankyouService } from './thankyou.service';

describe('ThankyouService', () => {
  let service: ThankyouService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThankyouService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
