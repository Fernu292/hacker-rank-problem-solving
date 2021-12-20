'use strict'

/*Ejercicio 1 enunciado
Dada una cadena de texto, comprobar si es ub palindromo o no
los palindromos son palabras que se leen solas al derecho y al 
reves.

Por ejemplo:
    Ana, atto, bob, 
    */

const prompt = require('prompt-sync')();

const string = prompt();

const isPalindrome = (p)=>{
    let p1 = '';

    for(let i=p.length - 1;i>=0;i--){
        p1+=p[i];
    }

    if(p1==p){
        return 'Is palindrome';
    }
    else{
        return 'Is not palindrome';
    }
};

const result = isPalindrome(string);

console.log(result);