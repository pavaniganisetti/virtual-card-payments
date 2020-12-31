import { TestBed } from '@angular/core/testing';

import { AuthorizationCanactivateService } from './authorization-canactivate.service';

describe('AuthorizationCanactivateService', () => {
  let service: AuthorizationCanactivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationCanactivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
