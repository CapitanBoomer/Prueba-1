import { Component,NgModule } from '@angular/core';
import { Alumnos } from './modelos/alumnos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public elementoguardado: Array<Alumnos>=[];
  public escucharAlumno(){console.log('holaa')}

  public agregarnuevo(nuevo : Alumnos): void{
    const id:number = this.elementoguardado.length + 1;
    nuevo.idalumno = id;
    this.elementoguardado.push(nuevo);
  }

  public borrarElemento(pos: number): void {
    this.elementoguardado.splice(pos,1);
    console.log('La pos es', pos);
  }
}
