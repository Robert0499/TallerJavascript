
restaFechas = function(f1,f2) {
 var aFecha1 = f1.split('/'); 
 var aFecha2 = f2.split('/'); 
 var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]); 
 var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]); 
 var dif = fFecha2 - fFecha1;
 var rsp=[];
 rsp[0] = Math.floor(dif / (1000 * 60 * 60 * 24)); 
 rsp[1] = Math.floor(dif / (1000 * 60 * 60 *(24*30)));
 rsp[2] = Math.floor(dif / (1000 * 60 * 60 * (24*365)));
 
 return rsp;
 }
 var f1 = (prompt("Enter date: DD/MM/AA"));
 var f2 = (prompt("Enter date: DD/MM/AA"));
 var rsp= restaFechas(f1,f2);
 console.log("The difference in days is: "+ rsp[0]);
 console.log("Th difference in months is: "+ rsp[1]);
 console.log("The difference in years is: "+ rsp[2]);
 
