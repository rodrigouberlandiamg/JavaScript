let carros = [5,8,2,9,3]
console.log(carros)
console.log(carros.length)
console.log(carros[1])
carros.push(10) //Adiciona valor 10
carros.sort() //ordena
console.log(carros)

for (let i=0; i < carros.length; i++){
    console.log(`A posição ${i} tem o valor ${carros[i]}`)
}

for (let pos in carros){
    console.log(`O numero é ${carros[pos]}`)
}

console.log(carros.indexOf(8))
console.log(carros.indexOf(60))