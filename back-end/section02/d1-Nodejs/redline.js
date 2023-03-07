const redline = require('readline-sync');
const calcularImc = require('./bmi');

const peso = redline.questionInt('qual seu peso?')
const altura = redline.questionInt('qual sua altura?')

calcularImc(peso,altura)

module.exports = {
  peso,
  altura,
};