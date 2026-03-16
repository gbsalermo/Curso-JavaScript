/*Arrays */

const alunos = [ 'Luiz', 'Maria', 'João', 1, true, null]; //Para criar uma lista coloco tudo em cochetes

console.log(alunos);//O js não restringe a apenas um tipo, porem não é de boa pratica um array dessa forma
//No array assim como na string tem os indices, porem no array cada objeto é um indice
/*EX:
    Luiz == indice 0
    Maria == indice 1
    João == indice 3
    ... */
//Pegar o primeiro nome/objeto
console.log(alunos[0]);  //Acessa o Luiz
//Para editar o valor
alunos[0] = 'Eduardo'; //Troca Luiz por eduardo
alunos[3] = 'Luiza'; //Troca João por Luiza
console.log(alunos);

//Saber o tamanho do array
console.log(alunos.length);
//Adicionar novos itens ao array
alunos[alunos.length] = 'sal';
console.log(alunos);

//Outra forma de adicionar é usando push que ja joga pro final do array
alunos.push('otavio');

//Adicionar o item no inicio, lembrando que nesse caso não substitui o primeiro e sim empurra a lista
alunos.unshift('Guilherme');

//Removendo items do final
alunos.pop();

//Removendo items do inicio
alunos.shift();

//Da para usar outra forma tambem
delete alunos[1]; //Porem nesse caso não exclui o indice, apenas o item dentro dele

//Descobrir os items de respectivos indices
console.log(alunos.slice(0, 2)); //Se por o valor negativo, ele vai do final para o inicio

//Array é um objeto indexado
