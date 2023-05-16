const somar = 1;
const subtrai = 2;
const multiplicar = 3;
const dividir = 4;

tabuada = 3;
numero = 256;
if(tabuada == 1){
    soma = 0;
    for (let i = 1; i < 11; i++) {
        soma = numero + i;
        console.log(`${numero} + ${i} = ${soma}`)
    }
}else if(tabuada == 2){
    console.log("TABUADA DE SUBTRAIR")
    subtrair = 0;
    for (let i = 1; i < 11; i++) {
        subtrair = numero - i;
        console.log(`${numero} - ${i} = ${subtrair}`)
        
    }
}else if(tabuada == 3){
    console.log("TABUADA DE MULTIPLICAR")
    multiplicador = 1;
    for (let i = 1; i < 11; i++) {
        multiplicador = numero * i;
        console.log(`${numero} X ${i} = ${multiplicador}`)
    }
}
