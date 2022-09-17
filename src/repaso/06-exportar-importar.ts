//exportar e importar
import {calcularIVA, Producto}from './05-desestructura-funciones'

const carrito:Producto[]=[
{   
    desc:'Telefono1',
    precio:1240
},
{
    desc:'telefono2',
    precio:3133
}
];

const [total, totaliv]=calcularIVA(carrito);
console.log('total: ', total,'IVa: ',totaliv);
