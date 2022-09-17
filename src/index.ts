class SumaRara{
    private numerito:number;
    private numerito2:number;
    private cont:number;
    private resultado:number;

    setSumas(a:number,b:number):void{
        this.numerito=a;
        this.numerito2=a;
        this.cont=b;
    }
    private MultiplicarS():void{
        for(let j=this.cont-1;j>=1;j--){
            console.log(`${this.numerito}+${this.numerito2}= `)
            this.resultado= this.numerito+=this.numerito2;
        }
    }
    public ejecucion(){
        this.MultiplicarS();
    }
    public imprimision():void{
        console.log(this.resultado);
    }
}

let multi= new SumaRara;
multi.setSumas(7,4);
multi.ejecucion();
multi.imprimision();