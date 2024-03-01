//FUNÇÃO QUE ITERA SOBRE O ARRAY DE LIVROS E OS EXIBE NA TELA
const elementoParaInserirLivros = document.getElementById('livros');
const elementoValorTotal = document.getElementById('valor_total_livros_disponiveis');
const spanValorTotal = document.getElementById('valor');
let valorTotal;

function exibirLivrosNaTela(listaDeLivros) {
    elementoParaInserirLivros.innerHTML = '';
    elementoValorTotal.innerHTML = '';
    valorTotal = 0;
    listaDeLivros.forEach(livro => {
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';
        valorTotal = livro.quantidade > 0 ? valorTotal += livro.preco : valorTotal += 0;
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    });
    console.log(valorTotal);
    spanValorTotal.textContent = valorTotal.toFixed(2);
}