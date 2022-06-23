// Importar as dependências
const catalogo = require('./database/catalogo.json');
const mostrarFilmes = require('./functions/mostrarFilmes');
const buscarFilme = require('./functions/buscarFilme')

// Definido a ação a ser realizada
let acao = process.argv[2];

// Decidir o que fazer
switch(acao){
    
    case 'mostrar':
        mostrarFilmes(catalogo);
    break;

    case 'buscar':
        let codigo = process.argv[3];
        let filmeEncontrado = buscarFilme(codigo)
        console.log(filmeEncontrado);
    break;

    case 'adicionar':
        console.log("vai adicionar um filme");
    break;

    default:
        console.error("Comando não encontrado");
}