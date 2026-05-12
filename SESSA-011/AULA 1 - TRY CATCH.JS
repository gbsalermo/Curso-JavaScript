/* try{

    //Executada quando não há erros    
}catch(e){
    //Executada quando há erros
} finally{
    //sempre, porem nem sempre utilizamos o bloco finally
} */


//Ex


function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instancia de Date.');
    }
    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false //para ser 24h
    });
}

const hora = retornaHora();
console.log(hora);