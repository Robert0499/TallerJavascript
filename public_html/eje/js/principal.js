class principal {
  
  constructor() {
    this._textNombre = '';
    this._textTelefono = '';
  }
  
  set textNombre(nombre) {
    this._textNombre = nombre;
  }
  
  set textTelefono(telefono) {
    this._textTelefono = telefono;
  }

  correr() {
    var view = new vista();
    var db = new BaseDeDatos();
    var nombre = this._textNombre;
    var telefono = this._textTelefono;

    $('#cpNombre').click(function () {
      view.cambiarPagina('#principal', '#pagina1');
    });

    $('#cpTelefono').click(function () {
      view.cambiarPagina('#principal', '#pagina2');
    });

    $('#cpRespuesta').click(function () {
      view.cambiarPagina('#principal', '#resultados');
      let name = db.devolver(nombre);
      let phone = db.devolver(telefono);
      view.imprimirRespuesta('#rsp', name, phone);
    });

    $('#clnP1').click(function () {
      view.cambiarPagina('#pagina1', '#principal');
    });

    $('#clnP2').click(function () {
      view.cambiarPagina('#pagina2', '#principal');
    });

    $('#btnRetornar').click(function () {
      view.cambiarPagina('#resultados', '#principal');
    });
    
    $('#cptP1').click(function () {
      db.capturar('#nombre', nombre);
      view.resetearCampo('#nombre');
      $('#clnP1').click();
    });
    
    $('#cptP2').click(function () {
      db.capturar('#telefono', telefono);
      view.resetearCampo('#telefono');
      $('#clnP2').click();
    });
  }

}