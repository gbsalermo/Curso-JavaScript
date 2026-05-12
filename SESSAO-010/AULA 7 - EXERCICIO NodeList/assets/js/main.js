//O exercicio pede duas coisas: PRiMEIRO COLOCAR A COR DE backgroundColorBody NO FUNDO DOS PARAGRAFOS E TAMBEM COLOCAR A COR DO TEXTO DO PARAGRAFO EM BRANCO

//QuerySelector retorna o primeiro elemento que tem a classe, no caso abaixo paragrafos
/* const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('.p'); // pegando paragrafos de dentro de uma div


const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
//console.log(backgroundColorBody);

//interando nos elementos
for (let p of ps){
    ps.style.backgroundColorBody = backgroundColorBody;
} */



//function copiarBackground(){

    //Seleciono a classe da div
    const paragrafos = document.querySelector('.container');
    
    //Seleciono a cor, que nesse caso vai ser a do body
    const sty = window.getComputedStyle(document.body);
    const background = sty.backgroundColor;

    //Seleciono todos os paragrafos
    const ps = document.querySelectorAll('.ps')

    //Uso o laço para alterar todos os valores
    for (let p of ps){
        //Esse backgroundColor remete ao css no metodo background-Color
        p.style.backgroundColor = background; //mudando o background para a cor do body
        p.style.color = "White"; //mudar apenas a letra para branco
    }


//}