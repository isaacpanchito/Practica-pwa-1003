let amaterno:string|number;

amaterno='cardiel';
amaterno=100;

let mascota=['perro', 'gato', 100 ,true]
let tem2:(boolean|number|string)[]=['rata',100,];
tem2.push(200);
let acciones:string[]=['dormir','comer','volar'];

//obejtos


interface Alumno{
    matricula:number|string;
    nombre3:string;
    apaterno2:string;
    acciones?:string[];
    email:string;

}
const alumno:Alumno={
    matricula:12345,
    nombre3:'Mario',
    apaterno2:'lopez',
    email:'xxx@gmail.com'
}

alumno.nombre3='Dario';
console.table(alumno);

