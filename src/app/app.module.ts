import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from "@angular/forms";
import { LayoutModule} from "./layout/layout.module";
import { PagesModule} from "./pages/pages.module";
import { CicloComponent } from './ciclo/ciclo.component';
import {BaseHttp} from "./shared/base/base-http";
import {BebidaService} from "./shared/service/bebida.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CicloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [
      BaseHttp,
      BebidaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
