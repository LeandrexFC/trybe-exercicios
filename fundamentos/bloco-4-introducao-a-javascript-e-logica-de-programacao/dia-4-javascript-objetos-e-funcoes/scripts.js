//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. 

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

  //console.log("Bem vinda " + info.personagem);

// 🚀 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. 

  //console.log(info.recorrente)

//3 - Faça um for/in que mostre todas as chaves do objeto.

for (let key in info) {
    //console.log([key])
}

//4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. console:
for (let key in info) {
    //console.log(info[key])
}

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
let info2 = {
    personagem: 'Tio patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178', 
    nota: 'O último MacPatinhas',
    recorrente:'Sim'
};


for(let key in info2){

    if(info2[key] === info[key]){
        //console.log("Ambos recorrentes")
    }else {
        //console.log(info[key] + ' e ' + info2[key]);
}

}

//🚀 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

console.log ("O livro favorito de " + leitor.nome + ' ' + "se chama " + leitor.livrosFavoritos[0].titulo + ' ' );