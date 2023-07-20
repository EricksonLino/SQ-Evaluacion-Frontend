import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaGatosComponent } from './componentes/gatos/tabla-gatos/tabla-gatos.component';
import { DetalleGatoComponent } from './componentes/gatos/detalle-gato/detalle-gato.component';
import { CrearGatoComponent } from './componentes/gatos/crear-gato/crear-gato.component';
import { EditarGatoComponent } from './componentes/gatos/editar-gato/editar-gato.component';

const routes: Routes = [
  {path: 'tabla-gatos', component: TablaGatosComponent},
  {path: 'tabla-gatos/:id', component: DetalleGatoComponent},
  {path: 'crear-gato', component: CrearGatoComponent},
  {path: 'tabla-gatos/editar-gato/:id', component: EditarGatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
