let soma = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$0';
document.getElementById('quantidade').value = 0;

function adicionar() {
    let buscarProduto = document.getElementById('produto').value;
    let separarValor = buscarProduto.split('- R$');
    let produto = separarValor[0];
    let valorProduto = parseFloat(separarValor[1]);


    let buscarQuantidade = document.getElementById('quantidade').value;
    let quantidade = parseInt(buscarQuantidade);

    let valorUnitario = quantidade * valorProduto;
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Informe uma quantidade válida, maior que zero.');
        return;
    }

    let buscarCarrinho = document.getElementById('lista-produtos');
    buscarCarrinho.innerHTML += `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>`;

    soma += quantidade * valorProduto;

    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$${soma}`;
}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$0';
    document.getElementById('quantidade').value = 0;
    soma = 0;
}