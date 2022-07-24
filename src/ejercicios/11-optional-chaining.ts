interface Pasajero {
  nombre: string;
  hijos?: string[];
}
const pasajero1: Pasajero = {
  nombre: "Fernando",
};

const pasajero2: Pasajero = {
  nombre: "Mlisa",
  hijos: ["Natalia", "Gabriel"],
};

function numHijos(pasajeros: Pasajero): void {
  /*debido a que el campo no esrequrido en la interfaz
   *debemos evaluar la propiedad con ? -> si .length  lenght es lo que va a hace va a medir
   *|| este otro operador es un else que le asigna un valor en caso de no pasar la condicion
   *
   */
  const cantHijos = pasajeros.hijos?.length || 0;

  console.log(cantHijos);
}

numHijos(pasajero2);
