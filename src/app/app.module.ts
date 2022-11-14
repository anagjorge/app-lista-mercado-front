import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListasComponent } from './componentes/listas/listas.component';
import { DetalhelistaComponent } from './componentes/detalhelista/detalhelista.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ListasComponent,
    DetalhelistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    FormsModule, 
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }