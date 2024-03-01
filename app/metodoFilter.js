//BOTÕES FILTRAR POR CATEGORIA
const botoes = document.querySelectorAll(".btn");

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? 
        filtrarPorDispinibilidade() : filtrarPorCategoria(categoria);
    exibirLivrosNaTela(livrosFiltrados);

    if(categoria == 'disponivel') {
        exibirTotalLivrosDisponviveis();
    }
}

function filtrarPorDispinibilidade() {
    return livrosComDesconto.filter(livro => livro.quantidade > 0);
}

function filtrarPorCategoria(categoria) {
    return livrosComDesconto.filter(livro => livro.categoria == categoria);
}

function exibirTotalLivrosDisponviveis() {
    elementoValorTotal.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal.toFixed(2)}</span></p>
        </div>
        `
}