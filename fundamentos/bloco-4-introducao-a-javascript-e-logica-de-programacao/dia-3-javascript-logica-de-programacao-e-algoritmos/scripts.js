//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
//4! = 4 x 3 x 2 x 1 = 24
//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

var fatorial = 10;
var resultado = fatorial;

for (var i = 1; i < fatorial; i++) {
    resultado *= i;
}
console.log(resultado);