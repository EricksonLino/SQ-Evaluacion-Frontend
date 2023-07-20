import { Component } from '@angular/core';
import { GatosService } from '../../../servicios/gatos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-gato',
  templateUrl: './detalle-gato.component.html',
  styleUrls: ['./detalle-gato.component.css'],
})
export class DetalleGatoComponent {
  gato: any = {};
  urlBase: string = "http://serv03.sidequest.pe/images/";

  constructor(
    private router: ActivatedRoute,
    private gatosService: GatosService
  ) {
    this.router.params.subscribe((params) => {
      this.getGatoPorId(params['id']);
    });
  }

  getGatoPorId(id: number) {
    this.gatosService.getGatoPorId(id).subscribe((data) => {
      this.gato = data;
      this.gato.urlCompleta = `${this.urlBase}${this.gato.imagen}`;
    });
  }
}
