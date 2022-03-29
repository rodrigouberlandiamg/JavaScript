function contar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passos = document.getElementById('passos')
    let res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        alert('[ERRO]: Faltam dados.')
        res.innerHTML = 'Impossivel Contar !'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        if (p <= 0) {
            alert('Passo inválido. Considerando PASSO 1!')
            p = 1
        }
        // Contagem crescente
        if (i < f){
            for (let c = i;c <= f;c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        // Contagem Regressiva.
        } else {
            for (let c = i;c >= f;c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }
}
