import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {TopbarComponent} from "./topbar/topbar.component";
import {MenuComponent} from "./menu/menu.component";
import { ConteudoComponent } from './conteudo/conteudo.component';

@NgModule({
  declarations: [
    FooterComponent,
    TopbarComponent,
    MenuComponent,
    ConteudoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    TopbarComponent,
    MenuComponent,
    ConteudoComponent
  ]
})
export class LayoutModule { }
