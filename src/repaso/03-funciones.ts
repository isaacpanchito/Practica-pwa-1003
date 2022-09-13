//manejo de funciones

//void indica que no devolvera datos
function nombres(): void {
  console.log("nombre");
}

function suma(num1: number, num2: number = 5): number {
  return num1 + num2;
}

//console.log(suma(10,3));

/*function resta(num1:number,num2:number, num3?:number):number{
    if (num3){
        return num1-num2-num3
    }
    else{
    return num1-num2;
    }
}*/
function resta(num1: number, num2: number, num3: number = 0): number {
  return num1 - num2 - num3;
}

//console.log(resta(10,5));
//console.log(resta(10,5,2));

const sumaFlecha = (a: number, b: number): number => {
  return a + b;
};

interface escuelaAlumno {
  nombre: string;
  email?: string;
  edad: number;
  saludar: () => void;
}

function alumnoUTL(alumno: escuelaAlumno, calificar: number): void {
  alumno.nombre = "Mario";
  alumno.email = "mario@gmail.com";
  edad: calificar;
}

const nuevoAlumno: escuelaAlumno = {
  nombre: "Dario",
  edad: 23,
  saludar() {
    console.log("Hola mundo!!!!");
  },
};
