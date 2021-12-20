'use strict'

const prompt = require('prompt-sync')();

const year = parseInt( prompt() );


const programerDay = (year)=>{
    
    if(year%4==0 || year%400==0){

        if(year%100==0){
            return `13.09.${year}`;
        }
        else{
            return `12.09.${year}`;

        }
    }
    else{
        return `13.09.${year}`;
    }
}

const resp = programerDay(year);

console.log(resp);