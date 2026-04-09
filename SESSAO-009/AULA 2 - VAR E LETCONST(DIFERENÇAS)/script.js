//let tem escopo de bloco {...bloco}
//Não da pra usar uma variavel let declarada dentro de um bloco, fora dele, ja com var esse erro nao ocorre
const verdadeira = true;

let nome = 'Luiz';
var nome2 = 'Luiz';

if(verdadeira){
    let nome = 'Otavio'; //Redeclara a variavel let pois ela ja esta em outro bloco
    console.log(nome, nome2);

    //bloco aninhado
    if(verdadeira){
        console.log('OK');
    }
}

console.log(sobrenome);

var sobrenome = 'Miranda'; //Aqui o var sofre uma elevação, o js entende a variavel e usa ela la em cima informando como undefined, mesmo sendo declarada depois de usada não dando erro
//Porem com let não ocorre o host,dando erro