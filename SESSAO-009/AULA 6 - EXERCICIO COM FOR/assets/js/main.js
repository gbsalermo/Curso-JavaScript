const elementos = [

    {tag: 'p', texto: 'Texto aleatorio'},
    {tag: 'div', texto: 'Texto aleatorio'},
    {tag: 'section', texto: 'Texto aleatorio'},
    {tag: 'footer', texto: 'Texto aleatorio'},
    
]

const container = document.querySelector('.container');

//criando elemento
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i]; //desestruturação do objt
    let tagCriada =  document.createElement(tag);
    let textoCriado = document.createTextNode(texto); //mesma função do innetHtml ou innerTexto
    //tagCriada.innerText = texto; //uso o innerText pois sei que so tem texto
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);