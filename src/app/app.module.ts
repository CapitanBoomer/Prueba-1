import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioalumnoComponent } from './componente/formularioalumno/formularioalumno.component';
import { FomularioasignarutaComponent } from './componente/fomularioasignaruta/fomularioasignaruta.component';
import { ListarAlumnoComponent } from './componente/listar-alumno/listar-alumno.component';
import { ListarHistorialComponent } from './componente/listar-historial/listar-historial.component';
import { AlumnosComponent } from './componente/alumnos/alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioalumnoComponent,
    FomularioasignarutaComponent,
    ListarAlumnoComponent,
    ListarHistorialComponent,
    AlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
