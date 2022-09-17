//desestructuración de funciones
export interface Producto{
    desc:string;
    precio:number;
}

const telefono:Producto={
    desc:'nokia',
    precio:1200,
}

const tablet:Producto={
    desc:'IPad Air',
    precio:20500,
}

function calcularIva(productos:Producto[]):number{
    let total=0;
    productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return total*0.16;
}


const articulos1=[telefono,tablet];
const totalIva=calcularIva(articulos1);
console.log('totIVa: ',totalIva);

export function calcularIVA(productos:Producto[]):[number,number]{
    let total=0;
    productos.forEach(({precio}) => {
        total+=precio;
    });
    return [total, total*0.16];
}

const articulos=[tablet,telefono];
const [total,iva]=calcularIVA(articulos);
console.log('Total:' ,total);
console.log('total con IVA: ',iva)