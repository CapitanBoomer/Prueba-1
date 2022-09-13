import { Component, Output,EventEmitter } from '@angular/core';
import {Alumnos} from './../../modelos/alumnos'
@Component({
  selector: 'app-formularioalumno',
  templateUrl: './formularioalumno.component.html',
  styleUrls: ['./formularioalumno.component.scss']
})
export class FormularioalumnoComponent {
@Output() public salida = new EventEmitter();
@Output() public salidastring = new EventEmitter<string>;
@Output() public enviarDato = new EventEmitter<Alumnos>;

public nuevoalumno: Alumnos = {
  rut : '',
  Nombre: '',
  Apellido:'',
  Edad:0

}
public agregarnombre(evento:Event):void {
  const elemento = evento.target as HTMLInputElement;
  this.nuevoalumno.Nombre = elemento.value
  this.salida.emit();
}
public agregarapellido(evento:Event):void {
  const elemento = evento.target as HTMLInputElement;
  this.nuevoalumno.Apellido = elemento.value
  this.salida.emit();
}

public agregaredad(evento:Event):void {
  const elemento = evento.target as HTMLInputElement;
  this.nuevoalumno.Edad = Number.parseInt(elemento.value)
  this.salida.emit();
}

public agregarrut(evento:Event):void {
  const elemento = evento.target as HTMLInputElement;
  this.nuevoalumno.rut = elemento.value
  this.salida.emit();
}

public guardardatos():void{
  const copia : Alumnos = {
    ...this.nuevoalumno
  }
  this.enviarDato.emit(copia);
  this.nuevoalumno.rut='';
  this.nuevoalumno.Nombre='';
  this.nuevoalumno.Apellido='';
  this.nuevoalumno.Edad=0;
  console.log('estoy aqui');
  this.salida.emit();
}

}
