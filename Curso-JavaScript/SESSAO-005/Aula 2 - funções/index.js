//Funções

function saudacao(nome){
    console.log(`Boa tarde ${nome}!`);
}

saudacao('Luiz'); //Chamando a função
//Posso reutilizar tambem a função
saudacao('Salermo');
saudacao('Enzo');

//Outra forma de chamar uma funcao

function nome(nome){
    return `Seu nome é ${nome}`;
}

const variavel = nome("Sal");
console.log(variavel);

//Usando funcoes com numeros

function soma(x, y){
    const resultado =  x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(5, 10));

//Outras formas de criar funções

const raiz = function(n){
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));

//Posso fazer tambem sem o function
//função arrow fuction
const raiz2 = (n) => {
    return n ** 0.5;
};

//ou tambem posso fazer

const raiz3 = n => n ** 0.5; 