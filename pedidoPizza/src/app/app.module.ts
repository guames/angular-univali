import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PedidoComponent } from './pedido/pedido.component';
import { SaborComponent } from './sabor/sabor.component';
import { TamanhoComponent } from './tamanho/tamanho.component';
import { BebidaComponent } from './bebida/bebida.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClienteComponent,
    PedidoComponent,
    SaborComponent,
    TamanhoComponent,
    BebidaComponent,
    IndexComponent,
    FooterComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
