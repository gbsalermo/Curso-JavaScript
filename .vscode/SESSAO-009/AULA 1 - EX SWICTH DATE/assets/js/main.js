
/*MINHA SOLUÇÃO
const data = new Date("2019-10-07T22:52");
//console.log(data.getDay(data)); teste se o numero da semana estava correto


//console.log(diaSemana);

//Função para formatar a data
function formataData(data){

const dia = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'];
const mes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

const iData = data.getDate();//Data do dia
const iAno = data.getFullYear(); //ano
const iMes = mes[data.getMonth()]; //Mês
const iDia = dia[data.getDay()]; //Dia da semana
const iHora = data.getHours(); //Hora
const iMin = data.getMinutes(); //minuto

return `${iDia}, ${iData} de ${iMes} de ${iAno} ${iHora}:${iMin}`;

}

const today = formataData(data);
document.getElementById('resultado').innerHTML = today; //para enviar pro html
/*const dia = diaSemana[formataData.];
console.log(dia);*/
