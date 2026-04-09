
//Bloco do for
//bloco do for não tem ; no final
// variavel inicial i
for(let i = 0; i <= 10; i++ /*posso fzr tbm: i += 10*/){
    //console.log(i);
    //console.log(`Linha ${i}`);

    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

//Percorrer um array com for

const frutas = ['maça', 'pera', 'uva', 'laranja', 'melao', 'morango'];

for (let i = 0; i < frutas.length; i++){
    console.log(`Índice ${i}`, frutas[i]);
}