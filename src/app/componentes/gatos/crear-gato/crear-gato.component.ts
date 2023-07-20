import { Component } from '@angular/core';
import { GatosService } from '../../../servicios/gatos.service';
import { Router } from '@angular/router';

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
      // console.log('curso creado')
      this.router.navigate(['/tabla-gatos'])
    })
  }
}
