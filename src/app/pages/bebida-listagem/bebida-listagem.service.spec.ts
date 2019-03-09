import { TestBed } from '@angular/core/testing';

import { BebidaListagemService } from './bebida-listagem.service';

describe('BebidaListagemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BebidaListagemService = TestBed.get(BebidaListagemService);
    expect(service).toBeTruthy();
  });
});
