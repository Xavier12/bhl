import { TestBed } from '@angular/core/testing';

import { BhlInterceptorService } from './bhl-interceptor.service';

describe('BhlInterceptorService', () => {
  let service: BhlInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BhlInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
