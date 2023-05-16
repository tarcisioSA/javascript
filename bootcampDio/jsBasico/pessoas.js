class Pessoa{
    constructor(nome, altura, peso){
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;

    
        
    }
    calculoImc() {
        return this.peso / (this.altura * this.altura)
    }
}

const jose = new Pessoa('José', 1.70, 70)
console.log(jose)
console.log(`IMC: ${jose.calculoImc().toFixed(2)}%`)
const tarcisio = new Pessoa('Tarcisio', 1.72, 90)
console.log(tarcisio)
console.log(`IMC: ${tarcisio.calculoImc().toFixed(2)}%`)