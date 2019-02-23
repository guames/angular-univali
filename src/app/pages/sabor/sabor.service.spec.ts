import { TestBed } from '@angular/core/testing';

import { SaborService } from './sabor.service';

describe('SaborService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaborService = TestBed.get(SaborService);
    expect(service).toBeTruthy();
  });
});
