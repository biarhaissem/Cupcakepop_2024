// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { BootstrapOptions } from '@angular/core';

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
// import { CardapioComponent } from './cardapio/cardapio.component';
// import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
// import { CadastroComponent } from './cadastro/cadastro.component';

// import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CardapioComponent } from './cardapio/cardapio.component';
// import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

import { HttpClientModule } from '@angular/common/http';
// import { NgxMaskModule } from 'ngx-mask';


@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    BemVindoComponent,
    CardapioComponent,
    SobreNosComponent,
    CadastroComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
