var num = document.getElementById('fnum')
var list = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }

}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }


}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} já adicionado. `
        list.appendChild(item)
        res.innerHTML = ''

    }else{
        window.alert('erro')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0 ) {
        window.alert('erro')
    }else{
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(var pos in valores){
            soma += valores[pos]

            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} Números cadastrados.</p>`
        res.innerHTML += `<p>O número maior foi ${maior}</p>`
        res.innerHTML += `<p>O número menor foi ${menor}</p>`
        res.innerHTML += `<p> A soma de todos os numeros é: ${soma}</p>`
    }
}