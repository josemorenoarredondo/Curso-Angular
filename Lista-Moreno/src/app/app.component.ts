import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Titulo:string="Este es el Desafio Lista de Alumnos"
  nombre = 'Jose Juan Moreno Arredondo';
  Alumnos = [
  {
    nombre:'Joselo',
    apellido:'Moreno'
  },{
    nombre:'Fernando',
    apellido:'Valadez'
  },{
    nombre:'David',
    apellido:'Luna'
  },{
    nombre:'Francisco',
    apellido:'Perez'
  },{
    nombre:'Armando',
    apellido:'Hernandez'
  },{
    nombre:'Alan',
    apellido:'Arredondo'
  }
];



}
