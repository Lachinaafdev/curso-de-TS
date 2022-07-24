
function suma  (a:number,b:number):number {
    return a+b;
}

const sumarflecha= (a:number, b:number):number =>{
    return a+b;
}

function multiplicar (numero:number, otronumero?:number,base:number=2):number {
return numero+base;
}

const resultado = multiplicar(5,0,10);

console.log(resultado);

/* funciones con clases  */

/* Interface  */
interface PerInterface {
nombre:string
puntos:number;
mostrarPuntos:()=> void;

}

/* Funcion del personaje  con la operacion y variable*/
function curar(personaje:PerInterface,curarX) {
    personaje.puntos == curarX;
    console.log(personaje);
}


/* creacion del objeto con 
Nombre 
puntos */

const nuevoPersonaje:PerInterface = {
nombre: 'Superheroe1',
puntos:50,
mostrarPuntos() {
    console.log('puntos de vida:000', this.puntos);
}

}
/* llamar a la funcion con el nuevo objeto asignarle valor a la variable */
curar (nuevoPersonaje,20 );