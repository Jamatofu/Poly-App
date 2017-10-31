import { TestBed, inject } from '@angular/core/testing';

import { DefiServiceService } from './defi.service';

describe('DefiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefiServiceService]
    });
  });

  it('should be created', inject([DefiServiceService], (service: DefiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
