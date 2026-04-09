/*Operadores de comparação
> - Maior que
>= - Maior ou igual a que
< - Menor que
<= - Menor ou igual a que
== - igualdade (Valor, porem nao recomendado em js)
=== - igualdade estrita (valor e tipo)
!= - diferente (Valor, porem nao recomendado em js)
!== diferente estrito(valor e tipo)
*/

//Testando maior que
console.log(10 > 5); //Linguagem retorna true

//Testando maior ou igual a que
console.log(10 >= 5); //Verifica se uma das regras sao verdadeiras, ou seja, 10 é igual a 5? não, porém é maior que 5 retornando true
//Agora se,
console.log(10 >= 11); //Como nenhuma das regras são atendidas, retorna false

//Testando menor que
console.log(10 < 11); //Retorna true
//Testando menor ou igual a que
console.log(10 <= 11); //retorne true

//Detalhe
//Se eu crio uma variavel e faço uma comparação, acabo por salvar um "valor" de true ou falso nela
//Exemplo
const x = 10 > 5;
console.log(x); //me retorna true

//Testando igualdade
const n1 = 10; //Number
const n2 = '10'; //String
const y = n1 == n2;
console.log(y); //Me retorna true
//Usando dessa forma (==) ele não compara os tipos, ou seja, number e string ele converte para a comparação

//Igualdade Estrita
const z = n1 === n2;
console.log(z); //aqui ele retorna false
//Com (===) ele compara até os tipos

//As mesmas regras da igualdade e igualdade estrira se aplicam ao diferente