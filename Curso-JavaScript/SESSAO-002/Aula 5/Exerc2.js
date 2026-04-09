//Variavel pra nome
//Variavel para sobrenome
//Variavel para idade(Que necessita de calculo do ano)
//variavel peso
//variavel altura
//variavel IMC(Verifique calculo)

const nome = "Enzo Gabriel";
const sobrenome = "Salermo";
const idade = 30;
let peso = 84;
let altura = 1.80;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2026 - idade;

//Com o simbolo de soma, +, você consegue unir os valores

console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso + "kg", "tem", 
    altura, "de altura e seu IMC é de", imc, "Nascido em:", anoNascimento
   );

/*Uma forma mais moderna de imprimir valores junto de strings é usando ${valor} string
ex: 
console.log(`tem ${altura} de altura e seu IMC é de ${indiceMassaCorporal}`);
*/