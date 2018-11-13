export class Usuario {
    constructor(
        public id: string,
        public nome: string,
        public email: string,
        public idade: number,
        public senha: string,
        public ativo: boolean,
    ) {}
    
      getUsuario(){
        
        return this.email,this.id,this.nome, this.idade, this.ativo, this.senha
    }

}
