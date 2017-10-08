class principal {
  constructor() {
    this._personalif;
    this._familyInf;
    this._job;
    this._profile;

  }
  set personalif(personalif) {
    this._personalif = personalif;


  }

  set familyInf(familyInf) {
    this._familyInf = familyInf;
  }

  set job(job) {
    this._job = job;
  }

  set profile(profile) {
    this._profile = profile;
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
    $('#job').click(function () {
      view.cambiarPagina('#principal', '#pagina3');
    });
    $('#pro').click(function () {
      view.cambiarPagina('#principal', '#pagina4');
    });



    $('#clnP1').click(function () {
      view.cambiarPagina('#pagina1', '#principal');
    });

    $('#clnP2').click(function () {
      view.cambiarPagina('#pagina2', '#principal');
    });
    $('#2').click(function () {
      view.cambiarPagina('#pagina3', '#principal');
    });
    $('#4').click(function () {
      view.cambiarPagina('#pagina4', '#principal');
    });
    $('#5').click(function () {
      view.cambiarPagina('#pagina5', '#principal');
    });

    $('#btnRetornar').click(function () {
      view.cambiarPagina('#resultados', '#principal');
    });

    $('#cptP1').click(function () {

      $('#clnP1').click();
    });

    $('#cptP2').click(function () {

      $('#clnP2').click();
    });


    
    $('#cpRespuesta').click(function () {

      var name = $("#nombre").val();
      var id = $("#ID").val();
      var ci = $("#sta").val();
      var dres = $("#add").val();
      var pho = $("#telefono").val();
      var ema = $("#ema").val();
      var tel = $("#telefono1").val();
      var rel = $("#rela").val();
      var phone = $("#phone").val();
      var pso = $("#posi").val();
      var cmp = $("#comp").val();
      var ti = $("#time").val();
      var bo = $("#boss").val();
      var pro = $("#mes").val();
      $('#resp').html("Personal information: " + " <br> " + "<br>" + " Name: " + name + "<br>" +
        " Identification: " + id + "<br>" + " Civil status: " + ci + "<br>" + " Address: " + dres +
        "<br>" + " Phone: " + pho + "<br>" + " E-mail: " + ema + "<br>" + "<br>" +  
        " Family reference: " + "<br>" + "<br>" + " Name: " + tel + "<br>" + " Relationship: " + rel +
        "<br>" + "Phone: " + phone + "<br>" + " Position: " + pso + "<br>" + "<br>" +
        "Job reference: " + "<br>" + "<br>" + "Company: " + cmp + "<br>" + "Time worked: " + ti + 
        "<br>" + "Boss: " + bo + "<br>" + "<br>" + 
        "Profile: " + "<br>" + "<br>" + pro
              
              );


    });


  }

}


