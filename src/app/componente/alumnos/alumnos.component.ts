import { Component, Input, Output, EventEmitter } from '@angular/core';
import{Alumnos} from './../../modelos/alumnos';
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent  {
  @Input() public alumno!: Alumnos ;
  @Output() public idalumno = new EventEmitter<number>();
  public emitirId(): void {
    this.idalumno.emit(this.alumno.idalumno);
  }
  public emitir(): void {
    this.alumno.idalumno;
    this.idalumno.emit(this.alumno.idalumno);
  }


}
