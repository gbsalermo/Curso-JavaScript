/* 
&& -> false && trus -> false "O valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

Em js false é o valor literal false -> Chamado de Falsy valor
São eles:
0
'' "" ``
null / undefined
NaN
*/

//ele checa cada valor, verificando os verdadeiros e falsos e assim retornando o valor falso
console.log('Luiz otávio' && 0 && 'maria'); //Ele retorna o valor false
function falaOi(){
    return 'oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi()); //Retorna false, Isso ocorre pois o and precisa que todas as expressões sejam verdadeiras
//Agora, se ambas forem verdadeiras ele retorna a ultima
//Ex.

let Real = 'Joao';

console.log(Real && falaOi()); //Ambas verdadeiras, executa a ultima no caso falaOi

//Ja com o or ele precisa de qualquer uma pra ser verdadeira

console.log(0 || false || null || 'Salerminho' || true); //Saida Salerminho, pois para o js é uma string vdd, ou melhor, o primeiro valor verdadeiro da expressão
//Ele não se importa se tem algum outro valor verdadeiro depois do primeiro

const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'red';

console.log(corPadrao); //Sai vermelho, pois é a primeira expressão na variavel

//Outro exemplo

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e); //Ele sai false, pois há uma string com false no meio, se todos fossem falsos ia imprimir o ultimo falso