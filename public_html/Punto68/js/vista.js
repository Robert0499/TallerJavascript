class vista {
  
  mostar(elemento) {
    $(elemento).show();
  }
  
  ocultar(elemento) {
    $(elemento).hide();
  }
  
  cambiarPagina(elemento, elementoPrincipal) {
    this.ocultar(elemento);
    this.mostar(elementoPrincipal);
  }
  
  imprimirRespuesta(elemento, nombre, telefono) {
    $(elemento).text("Hola " + nombre + ", te comunicaré al telefono " + telefono);
  }
  
  resetearCampo(elemento) {
    $(elemento).val('');
  }
  
}