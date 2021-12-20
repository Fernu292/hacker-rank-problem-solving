const prompt = require('prompt-sync')();

const n = parseInt( prompt() );

const arr = prompt().split(' ').map( arrTemp => parseInt(arrTemp, 10
    ));


const reverseArray = (a)=>{
    let arr = [];
    const size = a.length-1;

    for(let i = size;i>=0;i--){
        arr.push( a[i] );
    }

    return arr;
}

const resp = reverseArray(arr);

console.log(resp);