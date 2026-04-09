/* 
Operadores logicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/

//And
console.log(true && true); //Ambas as expressões precisam ser verdadeiras, pode ser colocada em uma variavel tbm

//or
const expressaoOr = true || false; //Apenas umas das expressões precisa ser verdadeira
console.log(expressaoOr);

//Exemplo
const usuario = 'Luiz'; //Form que usuario digitou
const senha = '123456'; //Form usuario digitou

const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log(vaiLogar);

//Not - invertendo a expressão
// posso usar o ! quantas vezes eu quiser, a cada vez ele inverte
console.log(!false); //Sai como true ao inves de falso

