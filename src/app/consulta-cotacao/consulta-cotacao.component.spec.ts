import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCotacaoComponent } from './consulta-cotacao.component';

describe('ConsultaCotacaoComponent', () => {
  let component: ConsultaCotacaoComponent;
  let fixture: ComponentFixture<ConsultaCotacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaCotacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultaCotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
