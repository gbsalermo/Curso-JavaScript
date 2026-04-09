
/* Usando um exemplo anterior 
let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

//Uma maneira simples de fazer
const num = [b, c, a]; //atribuo para esse num os valores das variaveis ja criadas
[a, b, c] = num; //Atribuição via desestruturação

console.log(a, b, c); */

/* Outras formas de usar
//               0  1  2  3  4  5  6  7  8
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];

//const primeiroNum = numeros[0]; //atribuição simples do primeiro valor
//const [primeiroNumero, segundoNumero] = numeros; //com desestruturação, ele pega o primeiro indice(0) e o segundo indice(1)
//Posso pegar o restante dos valores tambem usando ...resto por exemplo
const [primeiroNumero, segundoNumero, ...resto] = numeros;
//da para pular valores tbm
const [um, , tres, , sete] = numeros;
console.log(primeiroNumero, segundoNumero);

console.log(um, tres, sete); */

// ... rest, ... spread

const numeros = [
//    0           1          2
//  0  1  2    0  1  2    0  1  2
   [1, 2, 3], [4, 5, 6], [7, 8, 9]
];

//pegar o numero 6
const [,[, ,seis]] = numeros;
console.log(seis);

//Outra forma, agora pegando o 9
const[lista1, lista2, lista3] = numeros; //pego cada array em listas distintas
console.log(lista3[2]); //pego o valor que eu quero indicando a lista e o indice que ele esta
