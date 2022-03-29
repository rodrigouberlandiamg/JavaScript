function adiciona_elemento_combo(numero){
    let tab = document.getElementById('seltab')
    let item = document.createElement('option')
    let campo = document.getElementById('txtnum')
    item.text = `${numero}`
    item.value = `Adiciona do numero: ${numero}`
    tab.appendChild(item)
    campo.value = ''
}

function remover_items(){
    let tab = document.getElementById('seltab')
    let item = document.getElementsByTagName('option')
    for (let positem in item){
        tab.removeChild(item[positem])
    }
    
}

function ordenar_combo(){
    remover_items()
    var novos_numeros = numeros.sort()
    try {
        for (let pos in novos_numeros) {
            adiciona_elemento_combo(novos_numeros[pos])
        }
    } catch {
        
    }
    
}

function analisa_numero(numero){
    
    numero = Number(numero)
    if (numero > 100 | numero < 0){
        alert('Numero não esta entre 0 e 100.')
    } else if (numero == 0) {
        alert('Favor digitar um numero entre 0 e 100.')
    } else if (numeros.length == 0){
        numeros.push(numero)
        adiciona_elemento_combo(numero)
        //alert(`Numero ${numero} adicionado. Numeros: ${numeros}`)
    } else if (numeros.indexOf(numero) != -1) {
        alert(`O numero ${numero} ja existe.`)
    } else {
        numeros.push(numero)
        adiciona_elemento_combo(numero)
        //alert(`Numero ${numero} adicionado. Numeros: ${numeros}`)
    }
}
var numeros = []