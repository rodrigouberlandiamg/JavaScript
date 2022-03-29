function parimp(numero){
    if (numero%2 == 0){
        return `O ${numero} é PAR`
    } else {
        return `O ${numero} é IMPAR`
    }
}

console.log(parimp(11))