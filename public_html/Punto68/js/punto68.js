
class principal {

    constructor() {
        this._option;
        this._sum;
        this._substraction;
        this._multiplication;
        this._division;
        this._array;
    }
    set array(array) {
        this._array = array;
    }

    set sum(array) {
        this._sum = this._array[0] + this._array[1];
    }

    set substraction(array) {
        this._substraction = this._array[0] - this._array[1];
    }

    set multiplication(array) {
        this._multiplication = this._array[0] * this._array[1];
    }

    set division(array) {
        this._division = this._array[0] / this._array[1];
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
            view.cambiarPagina('#principal', '#pagina3');
//            let name = db.devolver(nombre);
//            let phone = db.devolver(telefono);
//            view.imprimirRespuesta('#rsp', name, phone);
        });

        $('#divi').click(function () {
            view.cambiarPagina('#principal', '#pagina4');
        });

        $('#clnP1').click(function () {
            view.cambiarPagina('#pagina1', '#principal');
        });

        $('#clnP2').click(function () {
            view.cambiarPagina('#pagina2', '#principal');
        });

        $('#clnP3').click(function () {
            view.cambiarPagina('#pagina3', '#principal');
        });

        $('#clnP4').click(function () {
            view.cambiarPagina('#pagina4', '#principal');
        });

        $('#btnRetornar').click(function () {
            view.cambiarPagina('#resultados', '#principal');
        });

//        $('#cptP1').click(function () {
//            db.capturar('#nombre', nombre);
//            view.resetearCampo('#nombre');
//            $('#clnP1').click();
//        });

//        $('#cptP2').click(function () {
//            db.capturar('#telefono', telefono);
//            view.resetearCampo('#telefono');
//            $('#clnP2').click();
//        });


        var inicial = new principal;
        $('#cptP1').click(function () {
            var num1 = Number($("#nombre").val());
            var num2 = Number($("#num").val());
            var array = [num1, num2];
            inicial.array = array;
            inicial.sum = inicial.array;
            $("#suma").html("The result is: " + inicial._sum);
        });
        
        $('#cptP2').click(function () {
            var num3 = Number($("#num1").val());
            var num4 = Number($("#num2").val());
            var array = [num3, num4];
            inicial.array = array;
            inicial.substraction = inicial.array;
            $("#suma").html("The result is: " + inicial._substraction);
        });
        
        $('#cptP3').click(function(){
           var num5 = Number($("#num3").val()); 
           var num6 = Number($("#num4").val());
           var array = [num5, num6];
           inicial.array = array;
           inicial._multiplication = inicial.array;
           $("#suma").html("The result is: " +   num5 * num6);
        });
        
        $('#cptP4').click(function(){
           var num7 = Number($("#num5").val());
           var num8 = Number($("#num6").val());
           var array = [num7 , num8];
           inicial._array = array;
           inicial._division = inicial._array;
           $("#suma").html("The result is: " + num7 / num8);
        });
    }

}


