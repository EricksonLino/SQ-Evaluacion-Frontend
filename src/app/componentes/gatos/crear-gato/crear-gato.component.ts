import { Component } from '@angular/core';
import { GatosService } from '../../../servicios/gatos.service';
import { Router } from '@angular/router';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-crear-gato',
  templateUrl: './crear-gato.component.html',
  styleUrls: ['./crear-gato.component.css']
})
export class CrearGatoComponent {
  nombre: string='';
  descripcion: string='';
  imagen: string='';
  
  constructor(private gatosService:GatosService, private router: Router){

  }

  crearGato(){
    let gato = {nombre:this.nombre,descripcion:this.descripcion,imagen:this.imagen};
    this.gatosService.crearGato(gato).subscribe((respuesta:any) => {
      this.router.navigate(['/tabla-gatos'])
    })
  }
  
  upload(subida: any){
    let imagenSeleccionada = subida.target.files[0];
    var formData = new FormData();
    formData.append('archivo', imagenSeleccionada);
    this.gatosService.uploadImagen(formData).subscribe((response: any) => {
      this.imagen = response;
    })
  }
}
