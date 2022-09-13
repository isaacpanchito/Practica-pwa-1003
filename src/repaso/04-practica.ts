
interface utlAlumno{
    nombre:string;
    edad:number;
    direccion:{
        calle:string,
        pais:string,
        estado:string,
        numero:string,
    },
    mostrarDireccion:()=>void;
}


const pruebaAlumno:utlAlumno={
    nombre:'mario',
    edad:23,
    direccion:{
        calle:'belem',
        pais:'MX',
        estado:'GTO',
        numero:'103',      
    },
    mostrarDireccion(){
        console.log('hola mundo');
    }
}

console.log(pruebaAlumno.nombre, pruebaAlumno.edad);
console.log('calle: ', pruebaAlumno.direccion.calle, 'pais: ',pruebaAlumno.direccion.pais,' estado: ',pruebaAlumno.direccion.estado, ' numero: ',pruebaAlumno.direccion.numero);