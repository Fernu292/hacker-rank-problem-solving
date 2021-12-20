const prompt = require('prompt-sync')();

const arr = prompt().split(' ') ;

const sum = (arr)=>{
    let min = arr[0], max = 0, sum = 0 ;
    const size = arr.length;

    for(let i=0;i<size;i++){  
        sum+= parseInt(arr[i]);

        if(arr[i]>max){max=arr[i]};

        if(arr[i]<min){min=arr[i]};
    }

    console.log(`${sum-max} ${sum-min}`);
}

sum(arr)