import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GatosService {
  // urlBase: string='http://serv03.sidequest.pe/api/gatos';
  urlBase: string='http://serv03.sidequest.pe';

  constructor(private httpclient: HttpClient) { }
  getGatos(){
    return this.httpclient.get(`${this.urlBase}/api/gatos`)
  }

  // uploadImagen(){
  //   return this.httpclient.get(`${this.urlBase}/images`)
  // }

  getGatoPorId(id:number){
    return this.httpclient.get(`${this.urlBase}/api/gatos/${id}`);
  }

  crearGato(gato:any){
    return this.httpclient.post(`${this.urlBase}/api/gatos`, gato);
  }

  editarGato(id: number, gato:any){
    return this.httpclient.put(`${this.urlBase}/api/gatos/${id}`, gato);
  }

  eliminarGato(id:number){
    return this.httpclient.delete(`${this.urlBase}/api/gatos/${id}`);
  }

}
