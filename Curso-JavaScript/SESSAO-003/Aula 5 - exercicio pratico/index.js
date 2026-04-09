/* O exercicio é:
*   let varA = 'A'; -> B
 *  let varB = 'B'; -> C
 *  let varC = 'C'; -> A
 * 
 *  e printar os valores
 * 
 * não pode digitar manualmente
 */

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

const varAtemp = varA;

varA = varB;
varB = varC;
varC = varAtemp;

console.log(varA, varB, varC);