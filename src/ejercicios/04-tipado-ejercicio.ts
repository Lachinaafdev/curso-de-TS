interface Direc {
  calle: "string";
  pais: "string";
  ciudad: "string";
}

interface superHeroe {
  nombre: string;
  edad: number;
  direccion: Direc;
  finction: () => void;
}

const superHeroe = {
  nombre: "Spiderman",
  edad: 30,
  direccion: {
    calle: "Main ST",
    pais: "Mexico",
    ciudad: "cancun",
  },

  mostrarDireccion() {
    return this.nombre + "," + this.direccion.ciudad + this.direccion.pais;
  },
};

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);
