class carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca
        this.cor = cor
        this.gastoMedioPorKm = gastoMedioPorKm
    }

    calculo(distancia, precoCombustivel,  ) {
        return (distancia * this.gastoMedioPorKm) * precoCombustivel
    }

}

const uno = new carro('Fiat', 'preto', 1/12)
const palio = new carro('Fiat', 'prata', 1/10)


console.log(uno.calculo(70, 5))
console.log(palio.calculo(70, 5))