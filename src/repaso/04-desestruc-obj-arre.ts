//desestructuracion de objetos y arreglos
/* Poder trabajar con elementos de objetos sin necesidad de la gerarquia  
*/

interface Detalles{
    autor:string;
    anio:number;
}

interface Reproductorr{
    volumen:number;
    segundo:number;
    cancion:string;
    detalle:Detalles;
}

const reproductor:Reproductorr={
    volumen: 90,
    segundo:60,
    cancion:'Samba do brasil',
    detalle:{
        autor:'Paolo',
        anio:2000,
    }
}

const{cancion, volumen, segundo}=reproductor;
const{autor,anio}=reproductor.detalle;





console.table('El nobre de la cacion: '+cancion);
console.table('segundo de la cacion: '+segundo);
console.table('volumen de la cacion: '+volumen);
console.table('año de la cacion: '+anio);
console.table('autor de la cacion: '+autor);

const dbz:string[]=['koku', 'Vegetta777','krillin','Yamcha'];
/*console.log('Personaje 1: '+dbz[0]);
console.log('Personaje 2: '+dbz[1]);
console.log('Personaje 3: '+dbz[2]);
console.log('Personaje 4: '+dbz[3]);*/

const[p1,p2,p3,p4]=dbz;

console.log('Personaje 1: '+p1); 
console.log('Personaje 2: '+p2);
console.log('Personaje 3: '+p3);
console.log('Personaje 4: '+p4);