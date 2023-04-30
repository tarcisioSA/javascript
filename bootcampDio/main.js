const {gets, print} = require('./importacao');

const sorteados = [];


for (let i = 0; i < 5; i++) {
     const numeroSorteado = gets();
     sorteados.push(numeroSorteado);
    
}

let valor = 0
for (let i = 0; i< sorteados.length; i++) {
  const numeroSorteado = sorteados[i];
    if(numeroSorteado > valor){
        valor = numeroSorteado
    }


}

print(valor)
