// O operador ternario é ? ou :
// Ele é uma forma mais curta de escrever um if else
// Ele tem a seguinte sintaxe: condição ? valor1 : valor2
// Se a condição for verdadeira, o operador ternário retorna o valor1, caso contrário, retorna o valor2
//Lembra um pouco programação lambda 

//Exemplo
const pontuacaoUsuario = 999;

//Com if else
if(pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}

//Com operador ternário
//Sintaxe: condicao ? 'valor para verdadeiro' : 'valor para falso'
//Leitura: Se pontucao maior/igual a 1000 verdaeiro(?), então 'Usuário VIP', se não(:) 'Usuário normal'
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);

//Outro exemplo
const corUsuario = null;
const corPadrao = corUsuario || 'Preto';
console.log(nivelUsuario, corPadrao);
