

//if pode ser usado sozinho
// Sempre ao usar op else necessito de algum if antes
//Posso ter quantos else ifs que eu quiser e apenas um else na checagem
//Posso criar condições sem else if, utilizando apenas if e else

const hora = 50; //criando uma variavel hora que indica 10 da manha

/*if(hora < 12){ //Aqui uso if simnples para checar a condição da hora
    console.log('Bom dia!');
}*/

//Agora de forma mais robusta
/*
Entre 0 - 11 - bom dia
entre 12 - 17 - Boa tarde
entre 18 - 23 - Boa noite

if(hora >= 0 && hora <= 11){ //Pego o bloco completo de 11 ate 11:59
    console.log('Bom dia!');
} else if( hora >= 12 && hora<= 17){
    console.log('Boa tarde!');
} else if( hora >= 18 && hora <= 23){
    console.log('Boa noite!');
} else { //Caso não caia em nenhuma das condições acima 
    console.log('Olá'); 
} */

//posso usar uma codição só

const tenhoGrana = true;

if(tenhoGrana){
    console.log('Vou sair de casa');
} else{
    console.log('não vou sair');
}

//outra forma

const temDin = NaN; //Me retorna false, ou seja, não vai sair nada
//Preciso só de um if

if(temDin != true){ //Aqui está saindo pois coloquei a condição de ser diferente de true
    console.log('Não vou sair de casa');
} 


