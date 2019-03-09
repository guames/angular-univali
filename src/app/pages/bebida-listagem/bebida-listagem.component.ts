import { Component, OnInit } from '@angular/core';
import {BebidaModel} from "../../shared/model/bebida.model";
import {BebidaService} from "../../shared/service/bebida.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bebida-listagem',
  templateUrl: './bebida-listagem.component.html',
  styleUrls: ['./bebida-listagem.component.css']
})
export class BebidaListagemComponent implements OnInit {

  listaBebidas: BebidaModel[];

  constructor(
      public service: BebidaService,
      public router: Router
  ) {
    this.service.findAll().subscribe(res => {
      this.listaBebidas = res;
    });
  }

  ngOnInit() {

  }

  incluir() {
    this.router.navigate(['/bebida']);
  }

  remover(id) {
    this.service.delete(id).subscribe( () => {
      this.service.findAll().subscribe( res => {
        this.listaBebidas = res;
      });
    });
  }
}
