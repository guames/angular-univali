import { Component, OnInit } from '@angular/core';
import {BebidaModel} from '../../shared/model/bebida.model';
import {ActivatedRoute, Router} from '@angular/router';
import {BebidaService} from '../../shared/service/bebida.service';

@Component({
  selector: 'app-bebida',
  templateUrl: './bebida.component.html',
  styleUrls: ['./bebida.component.css']
})
export class BebidaComponent implements OnInit {
  bebida: BebidaModel;

  constructor(
      public route: ActivatedRoute,
      public router: Router,
      public service: BebidaService
  ) {
    this.bebida = new BebidaModel();

    this.service.find(this.route.snapshot.params['id']).subscribe(res => {
      this.bebida = res;
    });
  }

  ngOnInit() {
  }

  salvar() {
    this.service.create(this.bebida).subscribe(res => {
      this.router.navigate(['/bebida-listagem']);
    } );
  }

}