const prompt = require('prompt-sync')();

const timeConversion = (hour) =>{
    if(hour.endsWith('AM')){
        const Hour = hour.replace('AM', '');
        const time = Hour.split(':');
        
        const fi = parseInt(time[0]);

        if(fi==12){
            
            time[0] = String('00');

            const conversion = time.join(':');

            return conversion;
        }
        else if(fi<12){
            const conversion = time.join(':');
            return conversion; 
        }
        
        
    }

    if(hour.endsWith('PM')){
        const HourPM = hour.replace('PM', '');
        const timePM = HourPM.split(':');
        
        let fi = parseInt(timePM[0]);
        if(fi==12){
            const conversion = timePM.join(':');

            return conversion;  
        }
        
        fi+=12;
        timePM[0]=fi;

        const conversion = timePM.join(':');

        return conversion;
    }
    
}


const hour = prompt('Digite la hora: ');
const result = timeConversion(hour);
console.log(result);