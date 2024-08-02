let carrinho = [];
let totalGeral = 0;
limpar();

function adicionar() {
    // recuperar nome, preço e quantidade
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]; //dividindo o nome do produto do valor
    let valorUnitario = produto.split('R$')[1]; //dividindo o nome do produto do valor
    let quantidade = document.getElementById('quantidade').value;

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    // console.log("Produto: "+ nomeProduto);
    // console.log("Quantidade: " + quantidade);
    // console.log("Valor unitário: " + valorUnitario);

    //calcular preço
    let preco = quantidade * valorUnitario;
    //console.log("Preço: " + preco);

    let produtoExistente = carrinho.find(item => item.nome === nomeProduto);

    if (produtoExistente) {
        // Atualizar a quantidade e o valor total do produto existente
        produtoExistente.quantidade += parseInt(quantidade);
        produtoExistente.valorTotal = produtoExistente.quantidade * produtoExistente.valorUnitario;
    } else {
        // Adicionar o produto ao carrinho
        carrinho.push({
            nome: nomeProduto,
            quantidade: parseInt(quantidade),
            valorUnitario: parseFloat(valorUnitario),
            valorTotal: preco
        });
    }

    // Atualizar a exibição do carrinho
    atualizarCarrinho();


    //atualizar total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = '';

    // Verificar se o produto já existe no carrinho

}

function atualizarCarrinho() {
    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = ''; // Limpar a lista antes add produtos

    totalGeral = 0;
    carrinho.forEach(item => {
        listaProdutos.innerHTML += `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${item.quantidade}</span> ${item.nome} <span class="texto-azul">R$ ${item.valorTotal}</span>
        </section>`;
        totalGeral += item.valorTotal;
    });

    document.getElementById('valor-total').textContent = `R$ ${totalGeral}`;
}


function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ ';

}
