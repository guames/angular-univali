import { Component, OnInit } from '@angular/core';
import {BebidaService} from "./bebida.service";

@Component({
  selector: 'app-bebida',
  templateUrl: './bebida.component.html',
  styleUrls: ['./bebida.component.css']
})
export class BebidaComponent implements OnInit {

  constructor(
      public bebidaService: BebidaService
  ) { }

  ngOnInit() {
  }

}
