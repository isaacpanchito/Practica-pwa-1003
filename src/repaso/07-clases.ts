//Class

class Persona{
    nombre:string;
    edad:number

    constructor(a:string,b:number){
        //iniciar los procesos de la clase.

        this.nombre=a;
        this.edad=b;
    }

    imprimir():void{
        console.log(`Nombre: ${this.nombre} y edad: ${this.edad}  `);
    }

}

let persona1:Persona;
persona1=new Persona('Mario',23);
let persona2 = new Persona('Dario',22);

persona1.imprimir();
persona2.imprimir();


class Dado{
    private valor:number;
    public tirar(){
        this.generar();
    }
    private generar(){
        this.valor=Math.floor(Math.random()*6)+1;
    }

    public imprimir(){
        console.log(`salió el valor ${this.valor}`);
    }
}

let dado1 = new Dado();
dado1.tirar();
dado1.imprimir();

/*
class tabla{
    private numero:number;
    public temp:number;

    setNumero(a:number){
    this.numero=a;
    }
    
    getNumero():number{
    return this.numero;
    }

    calcular():void{
        for(let i=1;i<11;i++){
            console.log(`${this.numero} x ${i} = ${this.numero*i}`);
        }

        
        let s:number=1;
        while(s<11){
            console.log(`${this.numero} x ${s} = ${this.numero*s}`);
            ++s;
        }
        
    }
}

let tabla1=new tabla();

tabla1.setNumero(7);
console.log('Variable privada: '+tabla1.getNumero());
tabla1.temp=6;
console.log('Variable publica: '+tabla1.temp);
tabla1.calcular();
*/