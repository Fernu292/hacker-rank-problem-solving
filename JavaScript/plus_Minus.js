'use strict'

const prompt = require('prompt-sync')();

const n = parseInt(prompt());

const plusMinus = (arr) =>{

    let p = 0, n=0, z=0;
    let m = arr.length;

    for(let i=0;i<m;i++){

        if(arr[i]>0){
            p++;
        }
        else if(arr[i]<0){
            n++;
        }
        else if(arr[i]==0){
            z++;
        }
    }

    let Rp, Rn, Rz;

    Rp = p/m; Rp.toPrecision(4);
    Rn = n/m; Rn.toPrecision(4);
    Rz = z/m; Rz.toPrecision(4);

    console.log(Rp);
    console.log(Rn);
    console.log(Rz);

}


let arr = new Array(n);

for(let i=0;i<n;i++){
    arr[i] = prompt();
}
console.log(arr);
plusMinus(arr);