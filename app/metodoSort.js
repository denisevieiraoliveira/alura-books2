//BOTÃO ORDERNAR POR PREÇO
const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');

btnOrdenarPorPreco.addEventListener('click', ordernarLivrosPorPreco);

function ordernarLivrosPorPreco(){
    let livrosOrdenados = livrosComDesconto.sort((a, b) => a.preco - b.preco);
    exibirLivrosNaTela(livrosOrdenados);
}