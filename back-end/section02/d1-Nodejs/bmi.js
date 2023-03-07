const redline = require('readline-sync');

const calcularImc = (peso, altura) => {
  const imc = peso / (altura * altura);
  return imc;
}

function calculator() {
  const peso = redline.questionInt('qual seu peso?')
  const altura = redline.questionInt('qual sua altura?')

  const imc = calcularImc(peso, altura)

  console.log(imc)
}

calculator()