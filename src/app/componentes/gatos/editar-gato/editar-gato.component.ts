import { Component } from '@angular/core';
import { GatosService } from '../../../servicios/gatos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-gato',
  templateUrl: './editar-gato.component.html',
  styleUrls: ['./editar-gato.component.css'],
})
export class EditarGatoComponent {
  gato: any = {};
  urlBase: string = "http://serv03.sidequest.pe/images/";

  constructor(
    private router: ActivatedRoute,
    private gatosService: GatosService,
    private navegacion: Router
  ) {
    this.router.params.subscribe((data: any) => {
      this.getGatoPorId(data.id);
    });
  }

  getGatoPorId(id: number) {
    this.gatosService.getGatoPorId(id).subscribe((data: any) => {
      this.gato = data;
      this.gato.urlCompleta = `${this.urlBase}${this.gato.imagen}`;
    });
  }
  editarGato() {
    this.gatosService
      .editarGato(this.gato.id, {
        nombre: this.gato.nombre,
        descripcion: this.gato.descripcion,
        imagen: this.gato.imagen
      })
      .subscribe((data: any) => {
        this.navegacion.navigate(['/tabla-gatos']);
      });
  }

  cancelar() {
    this.navegacion.navigate(['/tabla-gatos']);
  }
}
