import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TablaGatosComponent } from './componentes/gatos/tabla-gatos/tabla-gatos.component';
import { DetalleGatoComponent } from './componentes/gatos/detalle-gato/detalle-gato.component';
import { EditarGatoComponent } from './componentes/gatos/editar-gato/editar-gato.component';
import { CrearGatoComponent } from './componentes/gatos/crear-gato/crear-gato.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TablaGatosComponent,
    DetalleGatoComponent,
    EditarGatoComponent,
    CrearGatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
