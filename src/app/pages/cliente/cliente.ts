export class Cliente {

    constructor(
        public id: number,
        public nome: string,
        public telefone: string,
        public cep: string,
        public logradouro: string,
        public numero: number,
        public complemento: string,
        public bairro: string,
        public cidade: string,
        public estado: string
    ){}
}
