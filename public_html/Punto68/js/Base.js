class BaseDeDatos {

  capturar(text, campo) {
    var valor = $(text).val();
    localStorage.setItem(campo, valor);
  }

  devolver(campo) {
    return localStorage.getItem(campo);
  }

}