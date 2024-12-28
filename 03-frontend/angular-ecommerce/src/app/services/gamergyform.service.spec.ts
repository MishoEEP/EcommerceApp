import { TestBed } from '@angular/core/testing';

import { GamergyformService } from './gamergyform.service';

describe('GamergyformService', () => {
  let service: GamergyformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamergyformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
