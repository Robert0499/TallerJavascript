//var i=0;
//var esp = 6, asterisco = 1;
//do {
//    var rsp = '';
//    var rspas = '';
//    var iesp = 0, iasterisco = 0;
//    while (iesp < esp) {
//        rsp = rsp + ' ';
//        iesp++;
//    }
//    esp--;
//    while (iasterisco < asterisco) {
//        rspas = rspas + '*';
//        (iasterisco++);
//    }
//    asterisco++;
//    console.log(rsp + rspas);
//    i++;
//} while (i <= 12);
var i = 0;
var x = "*";
var c = " ";

do {
    c = c + x;
    console.log(c );
    
    i++;

    if (i + 1 === 12) {
        c = c + x;
        console.log(c);
        i++;
    }

} while (i <= 12);