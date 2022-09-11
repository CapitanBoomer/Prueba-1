import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioalumnoComponent } from './formularioalumno.component';

describe('FormularioalumnoComponent', () => {
  let component: FormularioalumnoComponent;
  let fixture: ComponentFixture<FormularioalumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioalumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
