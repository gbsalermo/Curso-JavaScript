//Aula de objetos

//Criando um objeto, para isso utilizamos chaves

const pessoa0 ={
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa0.nome); //Peço o nome da pessoa1

//Usando função com objetos

function criarPessoa(nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

/*Forma mais reduzida
function criarPessoa(nome, sobrenome, idade){
    return{ nome, sobrenome, idade};
}
    */

//Crio pessoa1
const pessoa1 = criarPessoa('Luiz', 'Otavio', 25); 
console.log(pessoa1.sobrenome);

//Exemplo usando metodo com objeto

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Salermo',
    idade: 25,

    fala(){
        //console.log(`${this.nome} ${this.sobrenome} esta dando oi...`)
        console.log(`Minha idade atual é ${this.idade}`);
    },
    incrementaIdade(){
        this.idade++;
    }
};

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();