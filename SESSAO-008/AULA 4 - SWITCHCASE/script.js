const data = new Date('1987-04-25 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto;


switch (diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        //preciso pedir para ele sair quando achar o valor, usando break
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        //preciso pedir para ele sair quando achar o valor, usando break
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        //preciso pedir para ele sair quando achar o valor, usando break
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        //preciso pedir para ele sair quando achar o valor, usando break
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        //preciso pedir para ele sair quando achar o valor, usando break
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        //preciso pedir para ele sair quando achar o valor, usando break
        break;
    case 6:
        diaSemanaTexto = 'Sabado';
        //preciso pedir para ele sair quando achar o valor, usando break
        break;
    default:
        diaSemanaTexto = ''; 
        //Nesse caso por ser ultima opção o break é opcional
}

//Tudo isso pode ser adicionado para uma função
/*ex:

function getDayWeek(diaSemana){
//Preciso setar a variavel diaSemanaTexto na função
let diaSemanaTexto;

switch (diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        //O return faz o mesmo papel do break nesse caso
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'Segunda';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'Terça';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'Quarta';
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'Quinta';
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'Sexta';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'Sabado';
        return diaSemanaTexto;
    default:
        diaSemanaTexto = ''; 
        return diaSemanaTexto;

}
}

//Preciso setar a variavel aqui fora
const diaSemanaTexto = getDayWeek(diaSemana);
*/
console.log(diaSemanaTexto);