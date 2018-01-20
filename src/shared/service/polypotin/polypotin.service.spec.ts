import { TestBed, inject } from '@angular/core/testing';

import { PolypotinServiceService } from './polypotin.service';

describe('PolypotinServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PolypotinServiceService]
    });
  });

  it('should be created', inject([PolypotinServiceService], (service: PolypotinServiceService) => {
    expect(service).toBeTruthy();
  }));
});
