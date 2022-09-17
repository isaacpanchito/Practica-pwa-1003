import { NumericLiteral } from "typescript";
import { calcularIVA } from "./05-desestructura-funciones";

class Formula{

    private a:number;
    private b:number;
    private c:number;
    private res:number;
    private resmas:number;


    private CalcularMenos():void{
        this.res=(-this.b-Math.sqrt(Math.exp(this.b)-4*this.a*this.c))/2*this.a;
    }
    private CalcularMas():void{
        this.resmas=(-this.b+Math.sqrt(Math.exp(this.b)-4*this.a*this.c))/2*this.a;
    }

    public EnterMenos():void{
        this.CalcularMenos();
    }
    public EnterMas():void{
        this.CalcularMas();
    }
    
    setnumber(uno:number, dos:number,tres:number):void{
        this.a=uno;
        this.b=dos;
        this.c=tres;
    }

    public Imprimirmenos():void{
        console.log(this.res);
    }
    public IprimirMas():void{
        console.log(this.resmas);
    }

}

let formula = new Formula;
formula.setnumber(4,5,2);
formula.EnterMenos();
formula.EnterMas();
formula.Imprimirmenos();
formula.IprimirMas();