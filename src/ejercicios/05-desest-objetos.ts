/**Interfaz tipada */
interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalle;
}
interface Detalle {
  autor: string;
  anio: number;
}
/** objeto en var constante */

const reproductor: Reproductor = {
  volumen: 99,
  segundo: 50,
  cancion: "una chidita",
  detalles: {
    autor: "autor chido",
    anio: 2022,
  },
};
/** imprimir propiedades de un objeto sin desestructuracion */

console.log("volumen", reproductor.volumen);
console.log("autor", reproductor.detalles.autor);

/** imprimir propiedades de un objeto coon desestructuracion */
const {
  volumen,
  detalles: { autor },
} = reproductor;

/* mas ordenado y mas recomendado   const {autor} = detalles*/

/** desestructuracion de arreglos  constante + [posicion] = nombre array*/
const dbz: string[] = ["goku", "vegeta", "trunks"];
const [, , p3] = dbz;
