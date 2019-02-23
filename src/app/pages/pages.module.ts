import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClienteComponent} from "./cliente/cliente.component";
import {PedidoComponent} from "./pedido/pedido.component";
import {SaborComponent} from "./sabor/sabor.component";
import {TamanhoComponent} from "./tamanho/tamanho.component";
import {BebidaComponent} from "./bebida/bebida.component";
import {IndexComponent} from "./index/index.component";

@NgModule({
  declarations: [
    ClienteComponent,
    PedidoComponent,
    SaborComponent,
    TamanhoComponent,
    BebidaComponent,
    IndexComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClienteComponent,
    PedidoComponent,
    SaborComponent,
    TamanhoComponent,
    BebidaComponent,
    IndexComponent
  ]
})
export class PagesModule { }
