var i=0;
var esp = 5, asterisco = 1;
do {
    var rsp = '';
    var rspas = '';
    var iesp = 0, iasterisco = 0;
    while (iesp < esp) {
        rsp = rsp + ' ';
        iesp++;
    }
    esp--;
    while (iasterisco < asterisco) {
        rspas = rspas + '*';
        iasterisco++;
    }
    asterisco++;
    console.log(rsp + rspas);
    i++;
} while (i <= 5);
