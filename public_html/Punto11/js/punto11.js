var i = 0;
var x = "*";
var c = "";

do {
    c = c + x;
    console.log(c);
    i++;

    if (i + 1 === 5) {
        c = c + x;
        console.log(c);
        i++;
    }

} while (i <= 5);

