import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidaListagemComponent } from './bebida-listagem.component';

describe('BebidaListagemComponent', () => {
  let component: BebidaListagemComponent;
  let fixture: ComponentFixture<BebidaListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BebidaListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BebidaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
