const prompt = require('prompt-sync')();

const hour = String(prompt());

const conversionTime = (hour) =>{

    if(hour.endsWith('AM')){
        let Hour = hour.replace('AM', '');
        const time = Hour.split(':');
        time[0] = parseInt(time[0]);
        if(time[0]==12){
            time[0] = String("00");

        }else{
            
            time[0]-=12;
        }
        const conversion = time.join(':');
       

        console.log(conversion);
    }
    else if(hour.endsWith('PM')){
        let Hour = hour.replace('PM', '');
        const time = Hour.split(':');
        time[0] = parseInt(time[0]);

        time[0]+=12;
        const conversion = time.join(':');

        console.log(conversion);
        
    }

}

conversionTime(hour);