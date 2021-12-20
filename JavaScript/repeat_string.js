'use strict'
const prompt = require('prompt-sync')();

const s1 = prompt();
let n =parseInt( prompt() );

const repeatString = (s1, n)=>{
    
    let s2 = '';
    
    for(let i=0;i<n;i++){
        s2+=s1;
    }
    
    s1 = '';

    for(let i = 0;i<n;i++){
        s1+= s2[i];
    }
    
    
    let counter = 0;
    for(let i=0;i<s1.length;i++){
        if(s1[i]==='a'){
            counter++;
        }
        else continue;
    }

    return counter;
}




const result = repeatString(s1, n);
console.log(result);