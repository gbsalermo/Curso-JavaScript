//Você consegue separar texto com barra invertida tambem, Exemplo "um \"texto\"";
//Strings são indexadas, cada caractere tem um indice que começa de 0

let umaString = 'Um texto';

//Pegando um indice especifico, por exemplo o e do texto
//Caso o indice não existe retorna undefined
console.log(umaString[4]);
//Posso fazer tambem com charAt
console.log(umaString.charAt(4)); //Nesse caso se eu definir um indice que não existe retorna vaioo

//Temos também o concat que faz a contatenação de valores
console.log(umaString.concat(' em', ' um', ' lindo dia'));

//Posso pesquisar o indice de uma palavra com indexOf, informando em que indice começa a palavra
console.log(umaString.indexOf('texto'));

//Posso tambem usar para buscar a palavra depois de um indice especifico
console.log(umaString.indexOf('e', 2));

//Tem tambem o last indexOf só que no caso ele vai do final para inicio
console.log(umaString.lastIndexOf('e', 2));

//Tem o match de expressão regular que pega as letras minusculas
console.log(umaString.match(/[a-z]/g));

//Tem o search que me retorna o indice da palavra, parecido com o indexOf
console.log(umaString.search(/[a-z]/g));

//Tem o replace que substitui uma palavra por outra
console.log(umaString.replace('Um', 'Outro'));

//Pegar o tamanho da string
console.log(umaString. length);

//pegar um intervalo da string, lembrando que pra pegar as palavras corretamente tem que ser um antes e um depois
console.log(umaString.slice(2, 6));

//Para dividir uma String usamos split
console.log(umaString.split(' ', 2));

//Retornar a string toda em maiuscula e toda em minuscula
console.log(umaString.toUpperCase()); //Maiuscula
console.log(umaString.toLowerCase()); //Minuscula