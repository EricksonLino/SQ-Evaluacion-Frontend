import { Component } from '@angular/core';
import { GatosService } from '../../../servicios/gatos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-gatos',
  templateUrl: './tabla-gatos.component.html',
  styleUrls: ['./tabla-gatos.component.css']
})
export class TablaGatosComponent {
  gatos: any=[];
  urlBase: string = "http://serv03.sidequest.pe/images/";

  constructor(private gatosService: GatosService, private router:Router){
    this.getGatos();
    this.uploadImagen();
  }

  getGatos(){
    this.gatosService.getGatos()
    .subscribe((data) => {
      this.gatos = data;
      this.gatos.forEach((element:any) => {
        element.urlCompleta = `${this.urlBase}${element.imagen}`;
      });
    })
  }

  uploadImagen(){
    this.gatosService.uploadImagen()
    .subscribe((data)=> {
      this.gatos = data;
      console.log(data);
    })
  }

  detalle(id:number){
    this.router.navigate(['/tabla-gatos',id])
  }

  editarGato(id:number){
    this.router.navigate(['/tabla-gatos/editar-gato',id])
  }
}
