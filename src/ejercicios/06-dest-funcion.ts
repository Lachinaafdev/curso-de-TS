/** Definimos las interfaces */
export interface Producto {
  nombre: string;
  precio: number;
}

/** creamos algunos objetos para la interfaz */
const telefono: Producto = {
  nombre: "iphone 11pro",
  precio: 150,
};

const tableta: Producto = {
  nombre: "ipad 11 mini",
  precio: 350,
};

/** creamos una funcion que contenga un rray del tipo de objetos de la interfaz
 * le asignamos una variable del tipo let porque cambia =0
 *  recorremos un arreglo ---  productos.forEach((producto)=>{total==producto.precio})
 * notese que producto es el singular del nombre del array no el tipo de dato de la interfaz
 * ({}) podemos  desestructurar el arreglo nombrando solo la propiedad que queremos usar  al poner dentro del parentesisis
 * al poner el retorno de la funcion como number retorna el total  de un numero total de  todos los impuestos sumados
 * al poner number number retorna 2 numeros
 */

export function calculaISV(productos: Producto[]): [number, number] {
  let total = 0;
  productos.forEach(({ precio }) => {
    total += precio;
  });
  return [total, total * 0.15];
}

/** crear una constante que almacene el array con los productos que tenemos ya creados
  
   */
const listaproduct = [telefono, tableta];

/** crear una constante que  iguale la funcion a la constante que creamos del array  */
const [total, isv] = calculaISV(listaproduct);

/** imprimir la contante que almacena todo  */
console.log("ISV,", isv);
console.log("total", total);
