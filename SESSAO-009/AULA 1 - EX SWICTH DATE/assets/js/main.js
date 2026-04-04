
/*MINHA SOLUÇÃO
const data = new Date("2019-10-07T22:52");

function formataData(data){

const dia = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'];
const mes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

const iMes = mes[data.getMonth()]; //Mês
const iDia = dia[data.getDay()]; //Dia da semana

return `${iDia}, ${data.getDate()} de ${iMes} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;
}

const today = formataData(data);
document.getElementById('resultado').innerHTML = today; //para enviar pro html


/* //Solução 1 do professor

const h1 = document.querySelector('.container h1'); //seleciono o h1 para que eu possa modificar
const data = new Date();
//h1.innerHTML = 'Só para você ver'; //Saida teste pro html


function getDayWeek(diaSemana) {
    //Preciso setar a variavel diaSemanaTexto na função
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            //O return faz o mesmo papel do break nesse caso
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;

    }
}

function getMonth(nMes) {
    //Preciso setar a variavel diaSemanaTexto na função
    let mesTexto;

    switch (nMes) {
        case 0:
            mesTexto = 'Janeiro';
            //O return faz o mesmo papel do break nesse caso
            return mesTexto;
        case 1:
            mesTexto = 'Fevereiro';
            return mesTexto;
        case 2:
            mesTexto = 'Março';
            return mesTexto;
        case 3:
            mesTexto = 'Abril';
            return mesTexto;
        case 4:
            mesTexto = 'Maio';
            return mesTexto;
        case 5:
            mesTexto = 'Junho';
            return mesTexto;
        case 6:
            mesTexto = 'Julho';
            return mesTexto;
        case 7:
            mesTexto = 'Agosto';
            return mesTexto;
        case 8:
            mesTexto = 'Setembro';
            return mesTexto;
        case 9:
            mesTexto = 'Outubro';
            return mesTexto;
        case 10:
            mesTexto = 'Novembro';
            return mesTexto;
        case 11:
            mesTexto = 'Dezembro';
            return mesTexto;
        default:
            mesTexto = '';
            return mesTexto;

    }
}

function criaData(data){
    const diaSemana = data.getDay();
    const nMes = data.getMonth();

    const nomeDia = getDayWeek(diaSemana);
    const nomeMes = getMonth(nMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()}  ${data.getHours()}:${data.getMinutes()}`
    );
}

h1.innerHTML = criaData(data); //Pego a data e envio pro html */

//Solução 2 do professor

const h1 = document.querySelector('.container h1'); //Selecionando o que quero mudar no html
const data = new Date();

const opcoes = {
    dateStyle: 'full', //Pega a data ja formatada
    timeStyle: 'short' //Pega a hora ja formatada
};

/* obs importante
    toLocaleDataString só considera a data
    toLocaleTimeString só considera as horas
    toLocaleString considera ambos
*/

h1.innerHTML = data.toLocaleString('pt-BR', opcoes);

/* Outra forma mais curta
    h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
 */

