//Criando objeto

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//Atribuição via desestruturação
const { nome } = pessoa; //Aqui eu peço tipo: extraia do objeto a variavel com esse nome
console.log(nome);