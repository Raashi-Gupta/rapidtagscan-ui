import { TestBed } from '@angular/core/testing';

import { SiteCreationService } from './site-creation.service';

describe('SiteCreationService', () => {
  let service: SiteCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
