import { TestBed } from '@angular/core/testing';

import { LaunchingService } from './launching.service';

describe('LaunchingService', () => {
  let service: LaunchingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
