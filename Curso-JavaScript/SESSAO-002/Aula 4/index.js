//Há duas maneiras no js para criar variaveis, let e var, ambas sao quase a mesma coisa sendo var mais antigo
//let nome = 'Salerminho'; //Isso é uma String, por isso esta entre aspas

/*Exemplo de uso de variavel
console.log(nome, 'nasceu em 1984');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012');
console.log('Maria teve 1 filho com', nome, 'em 2015');
console.log('O filho de', nome, 'se chama Eduardo');*/

let nome; //Aqui é apenas uma declaração de variavel
nome = 'João'; //Aqui eu to inicializando a variavel
console.log(nome);//Não da erro, informa undefined indicando que a variavel existe mas não tem valor
nome = 'Otavio' //Aqui a variavel muda, pois inicializo com outro valor
console.log(nome);

//Não podemos criar variaveis com palavras reservadas pela linguagem
//Ex: let console, let if, etc...
//Varoaveos precisam ter nomes significativos

let n = 'João'; //Aqui é um exemplo de nome ruim para variavel
let nomeClient = 'Sal'; //Aqui eu ja sei sobre o que se trata a variavel

console.log('Cliente:', nomeClient);

//Não pode começar o nome de uma variavel com um numero
//let 1nome, vai da erro, o ideial é sempre começar com letras de preferência minusculas
//Não pode conter espaços ou traços
//Ex: -client, nome client, etc...
//Utilizamos camelCase, lembrando Java nesse caso, ex: enzoSalermo 
//As variaveis são Case-sensitive ou seja letra maiuscula e minuscula fazem diferença
// Não da pra redeclarar variaveis com let, apenas modificar o valor da variavel
//Não utilizar var e sim let em geral