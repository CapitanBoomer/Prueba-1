import { Component,Input,Output,EventEmitter } from '@angular/core';
import{Alumnos} from './../../modelos/alumnos'

@Component({
  selector: 'app-listar-alumno',
  templateUrl: './listar-alumno.component.html',
  styleUrls: ['./listar-alumno.component.scss']
})
export class ListarAlumnoComponent  {

  @Input() public alumnos: Array<Alumnos> = [];
  @Output() public posIndex = new EventEmitter<number>();

  public escuchaar(id :  number):void {
    const pos = this.alumnos.findIndex((elemento) => {
      return id === elemento.idalumno
    })
    this.posIndex.emit(pos);
  }

}
