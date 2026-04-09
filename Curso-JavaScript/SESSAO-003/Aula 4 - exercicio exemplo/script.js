//Aqui peço os numeros
let num1 = prompt('Digite um número: ');
let num2 = prompt('Digite outro número: ');

//Aqui converto eles para number(Eles retornam string no prompt)
num1 = Number(num1);
num2 = Number(num2);


//console.log(num1, num2); Função apenas para ver os valores no console

const resultado = num1 + num2;
alert(`O resultado é: ${resultado}`);