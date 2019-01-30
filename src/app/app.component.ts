import { Component, OnInit } from '@angular/core';

import { MotivosService } from './motivos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  motivoss = null;

  motivos = {
    motivo: null,
    des_motivo: null,
    estado: null,
    tipo: null
  }

  constructor(private motivosServicio: MotivosService) { }

  ngOnInit() {
    this.obtenerMotivos();
  }

  obtenerMotivos() {
    this.motivosServicio.obtenerMotivos().subscribe(
      result => this.motivoss = result
    );
  }

  addMotivo() {
    this.motivosServicio.addMotivo(this.motivos).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerMotivos();
        }
      }
    );
  }

  delectMotivo(motivo) {
    this.motivosServicio.delectMotivo(motivo).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerMotivos();
        }
      }
      
    );
  }

  updateMotivo() {
    this.motivosServicio.updateMotivo(this.motivos).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerMotivos();
        }
      }
    );
  }

  selecMotivo(motivo) {
    this.motivosServicio.selecMotivo(motivo).subscribe(
      result => this.motivos = result[0]
    );
  }

  hayRegistros() {
    return true;
  }
}
