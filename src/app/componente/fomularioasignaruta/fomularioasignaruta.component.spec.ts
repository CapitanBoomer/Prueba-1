import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomularioasignarutaComponent } from './fomularioasignaruta.component';

describe('FomularioasignarutaComponent', () => {
  let component: FomularioasignarutaComponent;
  let fixture: ComponentFixture<FomularioasignarutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FomularioasignarutaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FomularioasignarutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
