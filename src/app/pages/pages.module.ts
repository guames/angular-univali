import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClienteComponent} from "./cliente/cliente.component";
import {PedidoComponent} from "./pedido/pedido.component";
import {SaborComponent} from "./sabor/sabor.component";
import {TamanhoComponent} from "./tamanho/tamanho.component";
import {BebidaComponent} from "./bebida/bebida.component";
import {IndexComponent} from "./index/index.component";
import {LayoutModule} from "../layout/layout.module";

@NgModule({
  declarations: [
    BebidaComponent,
    ClienteComponent,
    IndexComponent,
    PedidoComponent,
    SaborComponent,
    TamanhoComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    BebidaComponent,
    ClienteComponent,
    IndexComponent,
    PedidoComponent,
    SaborComponent,
    TamanhoComponent
  ]
})
export class PagesModule { }
