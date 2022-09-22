const frase = () => "Acordando!!";

const frase2 = () => "Bora tomar café!!";

const frase3 = () => "Partiu dormir!!";

const doingThings = (callback) => callback();

console.log(doingThings(frase2));
console.log(doingThings(frase));
console.log(doingThings(frase3));
