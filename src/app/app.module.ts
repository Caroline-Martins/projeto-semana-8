import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroMateriaComponent } from './registro-materia/registro-materia.component';
import { ModalSucessoComponent } from './modal-sucesso/modal-sucesso.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroMateriaComponent,
    ModalSucessoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
