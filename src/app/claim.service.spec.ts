import { TestBed, inject } from '@angular/core/testing';

import { ClaimService } from './claim.service';

describe('ClaimService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClaimService]
    });
  });

  it('should ...', inject([ClaimService], (service: ClaimService) => {
    expect(service).toBeTruthy();
  }));
});
