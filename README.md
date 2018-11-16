# Sistema

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Recursos disponíveis:

- Login ( use admin / admin )
  Ideia inicial: Trazer a classe Usuario pela API e a validação ser através de parametros durante um POST, mas por alguma razão API mockada não realizava gravação ou validações, apenas trazia. A solução encontrada foi realizar direto no metodo do componente, de forma totalmente não segura e não otimizada (Trazer todo mundo).
  
  * O acesso é concedido da seguinte forma: É chamado o metodo getListaUsuario do serviço usuario.service, que por sua vez da um .get() no endereço da API Mockada que retorna um arquivo JSON, logo após, é feito um .subscribe para alocar em um array de Objetos do tipo Usuario. Quando o botão login é acionado, executa um metodo no componente do login dando um .find() nessa lista de Objetos que valida a existencia da senha e o login escritos no campo, retornando verdadeiro, é carregado o template da consulta e escondido o template login.

- Cadastro (Fake)
  Ideia inicial: O formulário ser gravado através de um POST em um array de Objetos do tipo Usuario na API, validar o cadastro do usuário com já os existentes.
  * Na barra de navegação acima selecionando a opção cadastrar é carregado o template do cadastro e escondido o template do login. A forma de validação é a Template driven form, as validações do campo são interativas e visuais. Quando o cadastro é submetido para envio, é chamado um metodo do usuarioService que faz um POST para a API mockada, que retorna o Objeto Usuario, como a API mockada não grava, é dado um retorno do tipo sucesso para garantir a chegada da informação. Depois de cadastrado aparece um alert bootstrap indicando sucesso de cadastro. Toda a documentação da API usada (apiry) está na pasta ./assets/data , os arquivos .apib foram os que eu usei como referencia para melhor tentar programar a API. O arquivo Apiblueprint.txt representa o código utilizado na API mockada.
 
- Pesquisa ( parcialmente funcional )
  Ideia inicial: Buscar os usuários pelo id.
    * Quando passar da tela de login ( sucesso ), o template de pesquisa será carregado e o de login escondido, nesse momento uma consulta será feita ao Usuario service que retornará da API todas os cadastros contidos. O campo de pesquisa não está funcional, não consegui fazer a página recarregar o array de objetos novo. O processo de exibição é feito pelo ngFor com o array de objetos.
