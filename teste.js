function calcularValorTotal(n, pedidos, cupom) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    let [nome, valor] = pedidos[i].split(" ");
    valor = parseFloat(valor);
    total += valor;
  }
  
  //TODO: Criar as condições para aplicar o cupom de desconto (10% ou 20%).
     if (cupom == 10) {
    total *= 0.9;
  } else if (cupom == 20) {
    total *= 0.8;
  }
  
  return total.toFixed(2);
}

//Recupera os valores de entrada, criando um array para os pedidos:
const n = parseInt(gets(4));
const pedidos = [
  "Pizza 19.99",
  "Salada 29.99",
  "Sushi 61.00",
  "Pudim 10.00"];

  for (let i = 0; i < n; i++) {
    pedidos.push(gets());
  }

const cupom = parseInt(gets(20));

const valorAPagar = calcularValorTotal(n, pedidos , cupom);
print(`Valor total: ${valorAPagar}`);

