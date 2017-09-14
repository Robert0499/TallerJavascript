

//var menu1 = 1;
var Configuracion;
var seguir;
var menu = 1;
function option() {
  var menu = parseInt(prompt("Configuracion del software de la nomina \n\
Selecciona una opcion: \n\
1. Seleccione el lenguaje \n\
2. Configuracion \n\
3. Continuar \n\
0. Salir del programa"));
  return menu;
}
function option1() {
  var menu1 = parseInt(prompt("payroll software configuration \n\
Select an option\n\
1. Select the lenguage \n\
2. Configuration \n\
3. Continue \n\
0. Quit the program"));
  return menu1;

}


function lenguaje() {
  var leng = parseInt(prompt("0. Español \n\
1. Ingles"));


  return leng;
}

function configuracion() {
  var Configuracion = parseInt(prompt("Configuración del software de la nómina:\n\
 Seleccione una opcion \n\
1. Nombre de la empresa \n\
2. Salario minimo \n\
3. Apartitr de cuantos salarios minimos  se cobra retencion en la fuente\n\
4. Porcentaje de retencion en la fuente \n\
5. Hasta cuantos salarios minimos son necesarios para pagar auxilio de trasnporte \n\
6. Cuanto es el auxilio de trasnporte \n\
7. Cantidad de horas laboradas al mes \n\
8. Volver \n\
0. Salir del programa"));
  return Configuracion;
}

function configuration() {
  var configure = parseInt(prompt("Payroll software configuration: \n\
Select an option: \n\
1. Name of the company \n\
2. Minimum wage \n\
3. Apartitr of how many minimum wages is retained in the source \n\
4. Percentage of withholding at source \n\
5. Up to how many minimum wages are needed to pay for transportation assistance \n\
6. How much is the transportation aid \n\
7. Number of hours worked per month \n\
8. Back \n\
0. Quit the program"));
  return configure;
}
function continuar() {
  var continua = parseInt(prompt("Software de la nomina \n\
Seleccione una opcion \n\
1. Gestion de empleados \n\
2. Registrar horas laboradas \n\
3. Generar nomina \n\
4. Imprimir comprobante de pago \n\
5. Volver \n\
0. Salir del programa"));
  return continua;
}

function Continue() {
  var Continue1 = parseInt(prompt("payroll software Select an option \n\
1. Management of employees \n\
2. Record hours worked \n\
3. Generate payroll \n\
4. Print proof of payment \n\
5. Back \n\
0. Quit the program"));
  return Continue1;
}
function gestionEm() {
  var gestion = parseInt(prompt("Software de la nomina\n\
 Gestion de empleados \n\
Seleccion una opcion:\n\
1. Agregar \n\
2. Modificar \n\
3. Elminar \n\
4. Volver \n\
0. Salir del programa"));
  return gestion;
}

function manag() {
  var manage = parseInt(prompt("Payroll Software\n\
 Employee management \n\
Select an option: \n\
1. Add \n\
2. Modify \n\
3. Delete \n\
4. Back  \n\
0. Quit the program"));
  return manage;
}

while (menu !== 0) {
  menu = option();
  switch (menu) {
    case 1:
      leng = lenguaje();

      switch (Configuracion) {
        case 0:
          alert("GoodBye Thanks for using program");
          break;
        case 8:
          menu = option();
          break;

      }


      switch (leng) {
        case 0:
          menu = option();
          break;
        case 1:
          menu1 = option1();
          break;

      }

      switch (menu1) {
        case 1:
          leng = lenguaje();
          break;
        case 2:
          configure = configuration();
          break;
        case 3:
          Continue1 = Continue();

          switch (Continue1) {
            case 1:
              manage = manag();
          }
        case 0:
          alert("GoogBye Thanks for using program");
          break;
      }


      switch (configure) {
        case 1:
          confirm("Seguro?");
          break;
        case 8:
          menu1 = option1();
          break;

        case 0:
          alert("GoogBye Thanks for using program");
          break;
      }

    case 3:
      continua = continuar();

      switch (continua) {
        case 1:
          gestion = gestionEm();
          break;
        case 5:
          menu = option();
          break;

        case 0:
          alert("GoogBye Thanks for using program");
          break;

      }
      switch (gestion) {
        case 4:
          continua = continuar();
          break;
      }

    case 2:
      Configuracion = configuracion();

      break;
    case 0:
      alert("GoodBye Thanks for using program");

  }
}
