import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClienteComponent} from "./cliente/cliente.component";
import {PedidoComponent} from "./pedido/pedido.component";
import {SaborComponent} from "./sabor/sabor.component";
import {TamanhoComponent} from "./tamanho/tamanho.component";
import {BebidaComponent} from "./bebida/bebida.component";
import {IndexComponent} from "./index/index.component";
import {LayoutModule} from "../layout/layout.module";
import {BebidaListagemComponent} from "./bebida-listagem/bebida-listagem.component";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    BebidaComponent,
    BebidaListagemComponent,
    ClienteComponent,
    IndexComponent,
    PedidoComponent,
    SaborComponent,
    TamanhoComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    BebidaComponent,
    BebidaListagemComponent,
    ClienteComponent,
    IndexComponent,
    PedidoComponent,
    SaborComponent,
    TamanhoComponent
  ]
})
export class PagesModule { }
