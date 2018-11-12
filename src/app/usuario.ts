export class Usuario {
    constructor(
        public id: string,
        public nome: string,
        public email: string,
        public idade: number,
        public senha: string,
        public ativo: boolean,
    ) {}
}
