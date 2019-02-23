import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.TITULO = "Pedido de Pizza";
        this.criarMenu();
    }
    MenuComponent.prototype.criarMenu = function () {
        this.menu =
            {
                titulo: "Cadastro Basico",
                itens: [
                    { descricao: "Sabor", link: "sabor.html" },
                    { descricao: "Tamanho", link: "tamanho.html" },
                    { descricao: "Bebida", link: "bebida.html" },
                    { descricao: "Cliente", link: "cliente.html" }
                ]
            },
            {
                titulo: "Pedido",
                itens: [
                    { descricao: "Registrar Pedido", link: "pedido_form.html" },
                    { descricao: "Listagem de Pedido", link: "pedido.html" }
                ]
            };
    };
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib_1.__decorate([
        Component({
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map