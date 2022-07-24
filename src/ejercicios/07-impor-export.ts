import { Producto } from "./06-dest-funcion";
import { calculaISV } from "./06-dest-funcion";
/** para usar las interfaces definidas en otros archivos deben ser importadas
 * para usar las funciones definidas enotros archivos debemos importarlas
 *
 */

/** ARRAY
 * una vez importadas las interfaces  podemos crear un nuevo array
 *  que contenga nuevos productos con la estructura de nuestra interfaz
 *  */
const carritoCompras: Producto[] = [
  {
    nombre: "Telefono 1",
    precio: 20,
  },
  {
    nombre: "Telefono 2",
    precio: 55,
  },
];
/**FUNCION
 * una vez importada la funcion la nombramos asignandole una variable
 * que almacene las variables de esa funcion
 * se iguala a el monbre de la funcioni inportada y se le pasa como parametro el array
 */

const [total, isv] = calculaISV(carritoCompras);

/**se imprime el array */
console.log("Total", total);
console.log("ISV", isv);
