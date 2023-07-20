import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GatosService {
  urlBase: string = 'http://serv03.sidequest.pe/api/';

  constructor(private httpclient: HttpClient) {}
  getGatos() {
    return this.httpclient.get(`${this.urlBase}gatos`);
  }

  uploadImagen(formData: FormData) {
    return this.httpclient.post(`${this.urlBase}gatos/upload`, formData);
  }

  getGatoPorId(id: number) {
    return this.httpclient.get(`${this.urlBase}gatos/${id}`);
  }

  crearGato(gato: any) {
    return this.httpclient.post(`${this.urlBase}gatos`, gato);
  }

  editarGato(id: number, gato: any) {
    return this.httpclient.put(`${this.urlBase}gatos/${id}`, gato);
  }

  eliminarGato(id: number) {
    return this.httpclient.delete(`${this.urlBase}gatos/${id}`);
  }
}
