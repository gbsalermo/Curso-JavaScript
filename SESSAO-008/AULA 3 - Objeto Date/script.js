
//O marco 0 é 01/01/1970 timestamp unix ou epoca unix
const data0 = new Date(0); //cria um objeto Date com a data e hora do marco 0
const data = new Date(); //basta usar new Date() para criar um objeto com a data e hora atual
console.log(data0); //exibe a data e hora do marco 0
console.log(data); //exibe a data e hora atual
//tem o formato toString tbm
console.log(data.toString()); //exibe a data e hora atual em formato de string

//Formatação da data manualmente
//                     ano, mes, dia, hora, minuto, segundo, milesimo
const data2 = new Date(2026, 2, 20, 15, 14, 27); //sem 0 a esquerda 
console.log(data2.toString()); //exibe a data e hora formatada manualmente

//Formatação da data com string 
const data3 = new Date('2026-03-20T15:14:27'); //formato ISO 8601
console.log('Dia', data.getDate()) //Pega a data do dia
console.log('Mês', data.getMonth() + 1) //Pega a data do mês, precisa do + 1 pois no js os meses começam em 0
console.log('Ano', data.getFullYear()) //Pega a data do ano
console.log('Hora', data.getHours()) //Pega a hora
console.log('Minuto', data.getMinutes()) //Pega o minuto
console.log('Segundo', data.getSeconds()) //Pega o segundo
console.log('ms', data.getMilliseconds()) //Pega o milesimo de segundo
console.log('Dia da semana', data.getDay()) //Pega o numero do dia da semana
console.log(data3.toString()); //exibe a data e hora formatada com string
console.log(Date.now()); //pegando os milesimos de segundos de agora

//Mais exemplo


//Função de zero a esquerda
function zeroEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

//Função para formatar a hora
function formataData(date){
    const dia = zeroEsquerda(date.getDate());
    const mes = zeroEsquerda(date.getMonth() + 1);
    const ano = zeroEsquerda(date.getFullYear());
    const hora = zeroEsquerda(date.getHours());
    const min = zeroEsquerda(date.getMinutes());
    const seg = zeroEsquerda(date.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const date = new Date();
const dataBrasil = formataData(date);
console.log(dataBrasil);
