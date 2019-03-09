import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public TITULO = "Pedido de Pizza";
  public menu;

  constructor() {
    this.criarMenu();
  }

  private criarMenu(){
    this.menu =[
      {
        titulo: "Cadastro Basico",
        itens: [
          { descricao: "Sabor", link: "sabor"},
          { descricao: "Tamanho", link: "tamanho"},
          { descricao: "Bebida", link: "bebida"},
          { descricao: "Bebida - Lista", link: "bebida-listagem"},
          { descricao: "Cliente", link: "cliente"}
        ]
      },
      {
        titulo: "Pedido",
        itens: [
          { descricao: "Registrar Pedido", link: "pedido_form"},
          { descricao: "Listagem de Pedido", link: "pedido"}
        ]
      }
    ]
  }

  ngOnInit() {
  }

}
