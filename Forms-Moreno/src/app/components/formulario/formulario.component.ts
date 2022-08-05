import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formularioPersona!:FormGroup;

  constructor(
    private formB: FormBuilder
  ) { 
    this.formularioPersona=this.formB.group({
      nombre: new FormControl('',[Validators.required]),
      apaterno: new FormControl('',[Validators.required]),
      amaterno: new FormControl('',[Validators.required]),
      edad: new FormGroup(0,[Validators.required]),
      correo: new FormControl('',[Validators.required,Validators.email])
    })
  }

  ngOnInit(): void {
  }

  enviarPersona(){
    console.log(this.formularioPersona);
  }

}
