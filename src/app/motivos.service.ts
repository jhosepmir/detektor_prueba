import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MotivosService {

  URL = "http://localhost/api/";

  constructor(private http: HttpClient) { }

  obtenerMotivos() {
    return this.http.get(`${this.URL}ObtenerMotivos.php`);
  }

  addMotivo(motivos) {
    return this.http.post(`${this.URL}AddMotivo.php`, JSON.stringify(motivos));
  }

  delectMotivo(motivo: number) {
    return this.http.get(`${this.URL}DelectMotivo.php?motivo=${motivo}`);
  }

  selecMotivo(motivo: number) {
    return this.http.get(`${this.URL}SelecMotivo.php?motivo=${motivo}`);
  }

  updateMotivo(motivos) {
    return this.http.post(`${this.URL}UpdateMotivo.php`, JSON.stringify(motivos));
  }
}
