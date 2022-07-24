//---DECORADORES--
/** decoradores cambian la clses cuando son definidas
 * un decorador no es mas que una funcion
 */

/** Clase 1 la clase 1  es generica
 * function + nombre +< T extiende + { new (tipos de argumento)}
 * costructor con el tipo de dato
 * lo que retorna
 */
function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    myProperty = "new property";
    hello = "override";
  };
}
/** clase 2  ->
 * nombre de las propiedades de la clase
 * nombramos al costructor de nuestra nueva clase
 * le decimos que  ejecute o retorne algo
 */
@classDecorator
class superClass {
  public miPropiedad: string = "abs0";

  imprimir() {
    console.log("Hola Mundo");
  }
}
/** imprimir la clase en consola (resultado la clse dos hereda las propiedades de la 1) -> */
console.log(superClass);

/**variable igualada a la clase que creamos para heredar
 *  instanciar una clase  */

const miClase = new superClass();
console.log(miClase.miPropiedad);
