//Usamos while quando não sabemos até quando vai ocorrer a repetição

/* const nome = 'sal';
let i = 0 //instancio a variavel i

/* while (i <= 10){
    console.log(i);
    i++; //sempre tem de colocar o incremento, se não o laço fica infinito
} */

/* while (i <= nome.length){
    console.log(nome[i]); //cada letra do nome, porém é preferivel o uso do for nesses casos
    i++; //sempre tem de colocar o incremento, se não o laço fica infinito
} */

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;


let rand = random(min, max);


//verificar quando o numero é 10
/* while (rand !== 10){
    rand = random(min, max);
    console.log(rand); //O ultimo numero vai ser 10, quando ele acha o numero 10 ele sai
} */

//Agora no do while, vai ser faça algo enquanto ocorre isso, executando o codigo primeiro e depois verificando a condição

rand === '####'; //Se eu ponho isso meu do while ainda funciona, pois primeiro ele faz e dps verifica
do{
    rand = random(min, max); //primeiro ele atualiza o valor
    console.log(rand);
} while(rand !== 10);//depois verifica a função e sai do laço
