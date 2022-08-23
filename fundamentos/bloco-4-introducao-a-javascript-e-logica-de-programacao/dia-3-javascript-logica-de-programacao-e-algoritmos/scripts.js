//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo: 4! = 4 x 3 x 2 x 1 = 24
//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
var fatorial = 10;
var resultado = fatorial;

for (let i = 1; i < fatorial; i+= 1) {
    resultado *= i;
}
console.log(resultado);

//2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let inverted = '';
  
for (let index = (word.length - 1); index >= 0; index--) {
    inverted += word[index]
}

console.log(inverted)

// 3 - Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPa = array[0];
let menorPa = array[0];

for(let i = 0; i < array.length; i+= 1) {
    if (array[i].length > maiorPa.length) {
        maiorPa = array[i]
    } 
}

for(let i = 0; i < array.length; i+= 1) {
    if (array[i].length < menorPa.length) {
        menorPa = array[i]
    }
}

console.log ("A maior palavra é", maiorPa, "com", maiorPa.length);
console.log ("A menor palavra é", menorPa, "com", menorPa.length);

//4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.
