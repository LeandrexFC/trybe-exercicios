// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = []

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        impar.push(numbers[i])
    }
}
//console.log(impar);

// 7. Utilizando for, descubra qual o menor valor contido no array e imprima-o

let menorNum = numbers[0]

for (let i = 0; i < numbers.length; i += 1 ) {
    if (numbers[i] < menorNum) {
        menorNum = numbers[i]
    }
}

// console.log('joao:',menorNum);

// 8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let num = []

for (let i = 0; i <= 100; i += 1) {
    num.push(i)
}

console.log(num);