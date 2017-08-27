var hours = Number(prompt("Enter number of hours"));
if (hours >= 24) {
  var resulD = Math.round((hours * 1) / 24);
  console.log("Is equivalent to: " + resulD + " days ");
}else {
  alert("Number of hours is not equivalent to one day");
  console.log("Number of hours is not equivalent to one day");
}
if (hours >= 168 ){
  var resultW = Math.round((hours *1) / (24 * 7) / 1);
  console.log("Is equivalent to: " + resultW + " Weeks");
}else {
  alert("Number of hours do not equilibrate to a week");
  console.log("Number of hours do not equilibrate to a week");
}
  

