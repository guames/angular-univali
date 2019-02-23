import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {TopbarComponent} from "./topbar/topbar.component";
import {MenuComponent} from "./menu/menu.component";

@NgModule({
  declarations: [
    FooterComponent,
    TopbarComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    TopbarComponent,
    MenuComponent
  ]
})
export class LayoutModule { }
