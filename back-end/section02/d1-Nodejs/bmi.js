const redline = require('readline-sync');

const calcularImc = (peso, altura) => {
  const imc = peso / (altura * altura);
  return imc;
}

function calculator() {
  const peso = redline.questionInt('qual seu peso?')
  const altura = redline.questionInt('qual sua altura?')

  const imc = calcularImc(peso, altura)

  if (imc < 18,5 ) {
    console.log('Abaixo do peso' + imc)
    return;
  } if ( imc >= 18.5 || imc < 25) {
    return 'Peso normal'
  } if (imc >= 25 || imc < 30 ) {
    return 'Acima do peso (sobrepeso)'
  } if (imc >= 30 || imc < 35 ) {
    return 'Obesidade grau I'
  } if (imc >= 35 || imc < 40 ) {
    return 'Obesidade grau II'
  } 
  else {
   return 'Obesidade graus III e IV '
  }

  console.log(imc)
}

calculator()