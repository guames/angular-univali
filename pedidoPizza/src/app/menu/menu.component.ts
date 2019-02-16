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

  criarMenu(){
    this.menu =[
      {
        titulo: "Cadastro Basico",
        itens: [
          { descricao: "Sabor", link: "sabor.html"},
          { descricao: "Tamanho", link: "tamanho.html"},
          { descricao: "Bebida", link: "bebida.html"},
          { descricao: "Cliente", link: "cliente.html"}
        ]
      },
      {
        titulo: "Pedido",
        itens: [
          { descricao: "Registrar Pedido", link: "pedido_form.html"},
          { descricao: "Listagem de Pedido", link: "pedido.html"}
        ]
      }
    ]
  }

  ngOnInit() {
  }

}
