// //PUNTO 1
// console.log("Rober Triana"); 
// //PUNTO 2

// var Texto= prompt('Ingrese texto'); 
// console.log( Texto);
// //PUNTO 3
// var NUM1= prompt('Ingrese variable 1'); 
// NUM3= Number(NUM1);
// var NUM2= prompt('Ingrese variable 2'); 
// NUM4 =Number(NUM2);
// var sum =  NUM3+NUM4;
// console.log("Suma de variable" +"  " + sum );
// var rest = NUM3-NUM4;
// var multi = NUM3*NUM4;
// var div = NUM3 / NUM4;
// console.log("Resta de variable" +"  " + rest );
// console.log("Multiplicacion de variable" +"  " + multi );
// console.log("Division de variable" +"  " + div );
// // punto 4
// var NUM= prompt('Ingrese el numero para saber si es primo '); 
// NUM0 = Number(NUM);
// numeroPrimo = true ;
// for (i = 1; i <NUM0;i++)
// {
// 	if (NUM0/ i == Math.round(NUM0/i) && i!=1 && i!=NUM0) {
// 		numeroPrimo = false ;
// 		break;

// 	};
// };
// if (numeroPrimo)
// 	console.log (`El numero  ${NUM0} es primo`);
// else
// 	console.log("EL numero " + NUM0 + "   "+"no es primo");
// //punto 5
// var NUM= prompt('Ingrese el numero para saber si es par o impar '); 
// NUM0 = Number(NUM);
// console.log(NUM0 % 2  === 0 ? "entonces es un numero par": "Es un numero impar");

// //punto 6
// var registro = {}
// registro.nombre = prompt('nombre'); 
//  registro.telefono = prompt('telefono'); 
//  registro.direccion = prompt('direccion'); 
//  registro.genero = prompt('genero'); 


// console.log ("Nombre"+" "+registro.nombre);
// console.log ("telefono"+" "+registro.telefono);
// console.log ("direccion"+" "+registro.direccion);
// console.log ("genero"+" "+registro.genero);

// //punto 7
// var NUM= prompt('Ingrese su edad '); 
// NUM0 = Number(NUM);
// console.log(NUM0 > 60 ? "Usted pertenece a la tercera edad ": "Usted es un pollo");

// //punto 8
// var NUM= prompt('Ingrese su edad '); 
// NUM0 = Number(NUM);
// console.log(NUM0 >= 18 ? "Bienvenido al party ": "Abrace de aqui");

// //punto 9

// var NUM= prompt('Ingrese su edad '); 
// var gen = prompt("Ingrese su genero (Masculino ('m') Femenino ('f')");
// NUM0 = Number(NUM);
// if (NUM >= 60)
// 	console.log("usted pertenece al grupo de la tercera edad");


// if ((NUM >= 18) && (gen == 'm') && (NUM<60))
// 	console.log(" Joven gracias por atender el llamado");
// if ((NUM >= 18) && (gen =='f')&& (NUM<60) )
// 	console.log(" Señorita, Gracias por venir, vuelva pronto");

// //PUNTO 10
// var name = prompt ( 'Ingrese su nombre');
// var  salario1 = prompt ('Ingrese su salario');
// salario = Number(salario1)
// var minimo = 700
// var retencion = 0.07
// var auxilio = 70
// if (salario>=700) {
// if ((salario>=minimo) && (salario< (2*minimo))){
// salario=(salario+auxilio)
// console.log("Nombre"+name)
// console.log("Usted tiene auxilio de transporte de "+ auxilio)
// console.log("Su salario es"+salario)}
// if (salario>(3*minimo)){
// 	salario=(salario-(salario*retencion))

// console.log("Nombre"+name)
// console.log("Su retencion en la fuente es de  "+ (salario*retencion))
// console.log("Su salario es"+salario)}
// if ((salario >= (2*minimo))&&(salario < (3*minimo))){
// 	console.log("Nombre"+name)
// console.log("Su salario es"+salario)
// }

// }
// else{
// 	console.log("Usted introdujo un salario menor a 700 	")
// }

var nombre =  prompt("Digite su nombre");
console.log("Hola soy" + nombre ("y estoy feliz de estar aprendiendo Javascript"));









