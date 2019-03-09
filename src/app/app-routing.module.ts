import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from "./pages/index/index.component";
import {BebidaComponent} from "./pages/bebida/bebida.component";
import {ClienteComponent} from "./pages/cliente/cliente.component";
import {BebidaListagemComponent} from "./pages/bebida-listagem/bebida-listagem.component";
import {PedidoComponent} from "./pages/pedido/pedido.component";
import {SaborComponent} from "./pages/sabor/sabor.component";
import {TamanhoComponent} from "./pages/tamanho/tamanho.component";

const routes: Routes = [
  {path:'index',component: IndexComponent},
  {path:'bebida',component: BebidaComponent},
  {path:'bebida-listagem',component: BebidaListagemComponent},
  {path:'cliente',component: ClienteComponent},
  {path:'pedido',component: PedidoComponent},
  {path:'sabor',component: SaborComponent},
  {path:'tamanho',component: TamanhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
