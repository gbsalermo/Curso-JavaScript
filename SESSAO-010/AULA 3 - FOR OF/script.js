

const nome = 'Gabriel Salermo';
const nomes = ['Sal', 'nz', 'biel', 'oi']

/*  for classico - observe que esse não funciona da melhor forma com objetos, focado mais em arrays ou strings(iteraveis)
for (let i = 0; i< nome.length; i++ ){
    console.log(nome[i]); //Acesso cada letra da string nome
} */

/* for in - Retorna o indice ou a chave, dando pra usar com Strings, arrays ou chaves
for (let i in nome){ 
    console.log(nome[i]); //Mesma coisa do for acima
} */

//for of - retorna o valor em si, ou seja, iteraveis(arrays ou strings)
for (let valor of nomes){ 
    console.log(valor); //Ele não retorna o indice e sim o valor de forma direta
}

//For Each
nomes.forEach(function(valor, indice) {
    console.log(valor, indice); //consigo retornar ambos, até mesmo o array
});
