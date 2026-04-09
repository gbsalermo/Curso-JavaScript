/*Esse codigo tem varias funções pois a ideia principal é treinar função e separar o codigo corretamente,
Ou seja, entender o que cada função faz e qual é o seu papel*/

//Capturar evento de submit do formulaário
const form = document.querySelector('#formulario'); //Pegando o formulario

form.addEventListener('submit', function (event) { //capturando o evento
    event.preventDefault(); //O preventDefault cancela o evento, evitando que ação padrão do evento não ocorra
    //Aqui eu pego o input inteiro de peso e altura
    const inputPeso = event.target.querySelector('#peso');    //nessa linha eu poderia tanto utilizar form como event.target(O target informa o elemento que foi clicado)
    const inputAltura = event.target.querySelector('#altura');

    //pegando os valores de peso e altura
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    //setResultado('olá mundo!'); //Teste para a função setResultado, enviando o parametro msg

    //Usando o condicional para verificar se o valor é falso
    if (!peso) { //Se o peso não for verdadeiro envia para gerar a msg
        setResultado('Peso inválido', false);
        return; //A função para aqui
    }
    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura); //Declaro imc
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true); //set verdadeiro para gerar a msg

});

//Função de logica do IMC
/*
Entre ..
Entre ..
Entre 25 e 32,9 Sobrepeso
Entre 30 e 34,9 Obesidade grau 1
Entre 35 e 39,9 Obesidade grau 2
Mais do que 40 Obesidade grau 3
*/
function getNivelImc(imc) {
    //O array tem indices 0 1 2 3 4 5 
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']; //Uso um array para guardar as msgs

    if (imc >= 39.9) {
        return nivel[5];
    }
    if (imc >= 34.9) {
        return nivel[4];
    }
    if (imc >= 29.9) {
        return nivel[3];
    }
    if (imc >= 24.9) {
        return nivel[2];
    }
    if (imc >= 18.5) {
        return nivel[1];
    }
    if (imc < 18.5) {
        return nivel[0];//Retorno os indices do arrays
    }

    /*Outra forma de fazer porem nao indicada
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5)  return nivel[0];
    */


}

//Função de calculo do IMC
function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2); //toFixed é para usar duas casas decimais

}


//Função de criação de paragrafos
function criaP() {
    const p = document.createElement('p'); //crio um paragrafo, porem nesse caso não ocorre nada pois ainda não adicionei em lugar nenhum
    //p.classList.add('paragrafo-resultado'); //Adiciono uma classe na lista de classe deste paragrafo, se não houver ele cria a class
    //p.innerHTML = 'Qualquer coisa'; //Coloco um html dentro do paragrafo
    return p;

}

//Função que vai receber o resultado
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado'); //A hastag captura o id que consta no meu html
    //resultado.innerHTML = `<p>${msg}</p>`; //Aqui envia pro meu html o parametro em forma de paragrafo
    resultado.innerHTML = '';

    const p = criaP();

    if(isValid) {
    p.classList.add('paragrafo-resultado'); //Cria a classe e retorna em verde no html
    } else{
        p.classList.add('bad'); //retorna em vermelho no html indicando valor invalido
    }


    p.innerHTML = msg;
    resultado.appendChild(p); //exemplo de adicionar o paragrafo na div resultado
}

