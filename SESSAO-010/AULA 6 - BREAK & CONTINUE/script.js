
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros){
    
    if (numero === 2 || numero === 5){
        continue; //indica para fazer isso e depois continuar o laço
    } //ele pula o dois e 5


    //O break se diferencia pois ele encerra o laço
    if(numero === 7){
        //Nesse caso ele encerra ja no sete, não mostrando o valor
        break;
    }

    console.log(numero);
}