const { peso, altura } = require('./redline');
const calcularImc = require('./bmi')

const resultImc = () => {
 const result = calcularImc(peso,altura);
  return result;
}

resultImc();
