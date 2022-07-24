//Funcion  decir el tipo de dato

function tipoDato<T>(argumento: T) {
    return argumento;
  }
  //igualar mi variable a la funcion mandar diferentes tipos de datos
  
  let soyString = tipoDato("holastring");
  let soyNumber = tipoDato(55);
  let soyArray = tipoDato([55, 5, 3, 8]);
  
  // GENERICOS pueden cambiar el tipo de dato es posible
  //para obligar a la variable a tener un tipo de dato puedes incluir el tipo de dato que requieres
  
  let soyExplicito = tipoDato<number>(55);
  