var array=[];
var arrayPrime=[];
var arraypair=[];
var sumprime=0;
var sumpair=0;
var promprime=0;
var prompair=0;
var contprime=0;
var contpair=0;
var prime=0;

for (var i = 0; i <=9; i++) {
	array[i]=Number(prompt("Enter a number"));
	
}
console.log(array);
i=0;

while(i<=9){
	
    
	if (array[i]%2===0) {
		arraypair[contpair]=array[i];
		sumpair=sumpair+arraypair[contpair];
        prompair=sumpair/contpair;
		contpair++;		
	}
	i++;
}
console.log("the pairs are: ");
console.log(arraypair);
console.log("The sum of the pairs is: " + sumpair);
console.log("The average pairs are: " + prompair);
i=0;
do{
	for(var j=1; j<=array[i]; j++) {
		if(array[i]%j===0){
			prime++;
		}
	}
	if (prime<=2) {
		arrayPrime[contprime]=array[i];
		sumprime=sumprime+arrayPrime[contprime];
        promprime=sumprime/contprime;
		contprime++;
	}
	prime=0;
	i++;
}while(i<=9)
console.log("The cousins are:");
console.log(arrayPrime); 
console.log("The sum of the cousins ​​is: " + sumprime);
console.log("The average cousins ​​are: " + promprime);