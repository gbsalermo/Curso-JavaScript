
let num1 = 9.54578;
//Arrendondar para baixo com math.floor
let num2 = Math.floor(num1);
console.log(num2);
//Arredondar para cima Math.ceil(num1)
num2 = Math.ceil(num1);
console.log(num2);
//Tem também a função round que retorna um numero arredondado para o mais prox
num2 = Math.round(num1);
console.log(num2);
//Achar o maior numero de uma quantidade de numeros
console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500));
//Agora o menor numero da sequencia usamos min
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500));
//Gerar um numero aleatorio com random de 0 a 1
console.log(Math.random());
//Para mudar o intervalo
//Usamos Math.random() * (Nmax - Nmin) + Nmin;
//Valor de pi
console.log(Math.pi);
//Potenciação
console.log(Math.pow(2, 10)); //Dois elevado a 10
//em js você pode multiplicar um valor por zero e ele lhe retorna infinity 
