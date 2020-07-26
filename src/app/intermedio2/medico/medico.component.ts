import { Component, OnInit } from '@angular/core';

import { MedicoService } from './medico.service';
import { MedicosService } from 'src/app/intermedio/espias/medicos.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: [
  ]
})
export class MedicoComponent implements OnInit {

  public medicos: any[] = [];

  constructor(
    public _medicoService: MedicosService
  ) { }

  ngOnInit(): void {
  }

  saludarMedico(nombre: string){
    return `Hola ${ nombre }`;
  }

  obtenerMedicos(){

    this._medicoService.getMedicos()
                        .subscribe( (medicos: any[]) => this.medicos = medicos );

  }
}
