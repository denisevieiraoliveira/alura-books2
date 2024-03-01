//FAZ A REQUISIÇÃO NO JSON
let livros = [];
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();
let livrosComDesconto = '';

//FUNÇÃO ASSÍNCRONA QUE AGUARDA UMA PROMISSE
async function getBuscarLivrosDaAPI() {
    const res = await fetch(endPointDaAPI);
    livros = await res.json();
    livrosComDesconto = aplicarDesconto(livros);
    exibirLivrosNaTela(livrosComDesconto);
}