// for in ler os indices da lista ou chaves do objeto
//Lista de frutas

const frutas = ['Pera', 'Maçã', 'Uva'];

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Salermo',
    idade: '25'
}
/* for(let i in frutas){
    console.log(frutas[i]);
} */
for (let chave in pessoa){
    console.log(chave, pessoa[chave]); //pego a chave e o valor dentro dela
}