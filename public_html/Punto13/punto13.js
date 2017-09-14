var aste = "*";
var spa= "    ";
var resul = "";
var p = "";
var w = " ";

for (i =1; i<=13; i++) {
	if(i===1){
		resul=spa+aste;
		console.log(resul);
	}
	if (i>=2 && i<=4) {
		if (i===3) {
			p=resul;
		}
		console.log(resul=resul.slice(1)+aste+aste);
	}
	if (i===5) {
		console.log(p);
	}
	if (i===6) {
		console.log(p);
	}
	if (i>=7 && i<=9) {
		console.log(p=p.slice(1)+aste+aste);
	}
	if (i>9) {
		console.log(p=w+p.slice(0,-2));
	}
    }