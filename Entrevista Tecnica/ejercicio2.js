/*
    Ejercicio2.
    Dada una palabra, buscarla en una frase y devolver cuantas veces 
    aparece, la palabra y la frase deben ser parametros de funcion
*/

const prompt = require('prompt-sync')();

const palabra = prompt("Digite una palabra: ");
const frase = prompt('Digite una frase: ');

const FindWord = (palabra, frase) =>{
    let count = 0;
    let frase2 = frase.split(' ');

    frase2.map( word =>{
        if(word===palabra){
            count+=1;
        }
    })
    console.log(count);
}

FindWord(palabra, frase);