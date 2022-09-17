
/*interface utlAlumno{
    nombre:string;
    edad:number;
    direccion:{
        calle:string,
        pais:string,
        estado:string,
        numero:string,
    },
    mostrarDireccion:()=>void;
}*/


const pruebaAlumno:DatosAlumno={
    nombre:'mario',
    edad:23,
    direccion:{
        calle:'belem',
        pais:'MX',
        estado:'GTO',      
    },
    mostrarDireccion(){
        return this.nombre+', '+this.direccion.estado+', '+this.direccion.pais;
    }
}
/*
console.log(pruebaAlumno.nombre, pruebaAlumno.edad);
console.log('calle: ', pruebaAlumno.direccion.calle, 'pais: ',pruebaAlumno.direccion.pais,' estado: ',pruebaAlumno.direccion.estado, ' numero: ',pruebaAlumno.direccion.numero);
console.log ('new branch');*/
const direccion=pruebaAlumno.mostrarDireccion();
console.log(direccion);

interface Direccion{
    calle:string;
    pais:string;
    estado:string
}

interface DatosAlumno{
    nombre:string;
    edad:number;
    direccion:Direccion;
    mostrarDireccion:()=>string;
}

