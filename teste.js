const pedido = {
  cliente: 'Joao',
  endereco: 'Rua B, 456',
  itens: [],
  taxaEntrega: 5.0
};

// Para popular o array de itens, criamos a seguinte estrutura de repetição:
const quantidadeItens = parseInt(2);
while (pedido.itens.length < quantidadeItens) {
    const nomeItem = ['Hamburger', 'Batata frita']
    const precoItem = parseFloat([15, 8])
    pedido.itens.push({nome: nomeItem, preco: precoItem})
  
}

//TODO: Percorra o array de itens do pedido e calcule o seu valor total.
let news = []

news.push = pedido.itens.preco

console.log(news)

let somaPedidos = 0;
for ( let i = 0; i < pedido.itens.length; i++ ){
  somaPedidos += pedido.itens[i].preco;
  
}

console.log(pedido.itens)
let valorTotal = somaPedidos + pedido.taxaEntrega
//TODO: Imprima a saída no padrão descrito neste desafio.
console.log(`Pedido: ${pedido.cliente}`);
console.log(`endereco de entrega: ${pedido.endereco}`);
console.log(`Total: R$ ${valorTotal.toFixed(2)}`);


