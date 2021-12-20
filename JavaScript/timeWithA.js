const prompt = require('prompt-sync')();

const distance = parseInt( prompt('Digite la distancia en metros: ') );
const acel = parseFloat( prompt('Digite la aceleracion en Metros por segundo al cuadrado: ') );

const v0 = parseFloat( prompt('Digite la velocidad inicial en metro sobre segundos: '));

const vF = Math.sqrt( 2*(distance*acel) +(v0**2) );
let Vel = vF.toPrecision(4);

const time = ((vF-v0)/acel).toPrecision(8);

console.log('\n**Los resultados son**')
console.log( `\nDistancia: ${distance}m \naceleracion : ${acel}m/s2 \nvelocidad final: ${Vel}m/s \nVelocidad inicial: ${v0}m/s \nTiempo: ${time}s`);