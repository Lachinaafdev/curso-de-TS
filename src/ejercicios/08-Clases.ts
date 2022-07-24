class PersonaNormal {
  constructor(public nombre: string, public direct: string) {}
}

/**
  private alterEgo: string;
  public edad: number;
  static nombreReal: number;

 *private: visible dentro de la clase
 * public:Afuera de la clase- solo parece al nobrarla en la instancia
 * static: accede sin crear instancia de la clase
 * hero.nombre real 
 * 
 * intancia de una clase - definicion 
 * const + nombre = new nombre de la clase que se instancia();
 * NOTA el instanciarla solo significa que ahora existe sin ebargo no tiene valores asignados
 * 
 * 
 * 
 * para acceder a la privet deber crear un constructor
 *  */

class Hero extends PersonaNormal {
  //alterEgo: string;
  //edad: number;
  //nombreReal: number;
  /** constructor (parametro:tipo de dato){this propiedad de la
   * clase= parametrp del constructor} */
  //nueva forma comprimida de nombrar clase y constructor
  constructor(
    public alterEgo: string,
    public nombreReal: string,
    public edad?: number
  ) {
    super(nombreReal, "ny");
  }
}

const hero1 = new Hero("Ironman", "Tony");

console.log(hero1);

/** CLASE
 * crear metodos dentro de la clases -funciones
 *
 * INTERFACE
 * las clases que se usan s
 * on tontas por que no se le implementa una funcionalidad
 *
 * CONSTRUCTOR
 * constructor(){}
 * una funcion de clase que se llama cuando creo una instancia de mi clase
 */
