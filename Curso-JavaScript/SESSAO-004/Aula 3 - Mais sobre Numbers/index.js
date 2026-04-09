
let num1 = 1;
let num2 = 2.5;

//Junção dos numeros (Concatenar eles)
console.log(num1.toString() + num2); //Usando o toString transformando os numeros em string
//Se eu colocar um 2 dentro do parenteses do toString ele me mostra o valor binario

//Arredondar o numero
console.log(num1.toFixed(2)); //O valor dentro do parenteses indica quantas casas decimais eu quero
//Saber se um numero da variavel é inteiro
console.log(Number.isInteger(num1)); //retorna true ou false se o numero é inteiro
//Saber se é um number
let temp = num1 * 'ola';
console.log(Number.isNaN(temp));
//Use parseFloat ou number para numeros que acabam nao sendo "Reais"