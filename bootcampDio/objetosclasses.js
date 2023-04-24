
class pessoa{
    nome;
    idade;

    constructor(nome, idade){
        this.idade = idade;
        this.nome = nome;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome}, e minha idade é ${this.idade}`)
    }
}



function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) do que ${p2.nome}`)
    }else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) do que ${p1.nome}`)
    }else{
        console.log(`${p1.nome} e ${p2.nome} te a mesma idade`)
    }
}

const tarcisio = new pessoa('Tarcisio', 28)
const vittor = new pessoa('Vittor', 39)

console.log(compararPessoas(tarcisio, vittor))



