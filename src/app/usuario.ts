export class Usuario {
    constructor(
        public id: string,
        public nome: string,
        public email: string,
        public idade: number,
        public senha: string,
        public ativo: boolean,
    ) {}
        
    listUsuarios = [
    
        {id: "1", nome: "Enrique", email: "abc", idade: 22, senha: "123", ativo: true},
        {id: "admin", nome: "Admin", email: "abc", idade: 99, senha: "admin", ativo: true}
        
    ];

      getUsuario(){
        
        return this.email,this.id,this.nome, this.idade, this.ativo, this.senha
    }

}
