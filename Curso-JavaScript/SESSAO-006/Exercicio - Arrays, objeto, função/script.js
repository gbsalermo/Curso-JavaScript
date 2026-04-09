function meuEscopo(){
    const form = document.querySelector('.form'); //Seleciono o formulario
    const resultado = document.querySelector('.resultado');

    const pessoas = []; //Array para guardar os resultados

/*
    form.onsubmit = function (evento){
        evento.preventDefault();
        alert(1);
        console.log('foi enviado');
    };*/

    function recebeEventoForm (evento){

        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        
        //Guardar valores no array criando um objeto para cada um deles e depois imprimir num paragrafo la no html
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ` + 
        `${peso.value} ${altura.value} </p>`;
        
        /*evento.preventDefault();
        console.log('Form não foi enviado');*/
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();