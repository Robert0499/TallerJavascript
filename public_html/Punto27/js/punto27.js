var menu = 1;
var personalif = {};
var familyR = {};
var JobReference = {};
var ProfileP = {};
var printH = {};
function option() {
  var menu = parseInt(prompt("Select an option to enter your data\n\
 1. Personal information\n\
 2. Family reference\n\
 3. Labor reference\n\
 4. Professional profile description\n\
 5. Print resume\n\
 0. Quit the program"));
  return menu;
}
function DatePer() {
  personalif = {
    name: " ",
    id: " ",
    status: " ",
    address: " ",
    phone: " ",
    email: " "
  };
  personalif.name = (prompt("Enter your name"));
  personalif.id = (prompt("Enter your identification document"));
  personalif.status = (prompt("Enter your civil status"));
  personalif.address = (prompt("Enter your address"));
  personalif.phone = (prompt("Enter Your phone number"));
  personalif.email = (prompt("Enter yor E-mail"));
  return personalif;

}


function FamilyRefe() {
  familyR = {
    name1: " ",
    relationship: " ",
    position: " ",
    phone1: " "
  };
  familyR.name1 = (prompt("Enter the person's name"));
  familyR.relationship = (prompt("Enter  relationship"));
  familyR.phone1 = (prompt("Enter  phone number"));
  familyR.position = (prompt("Enter  position "));
  return familyR;
}
function jobRefence() {
  bussines = (prompt("Enter the company"));
  position = (prompt("Enter the position "));
  TimeWorked = (prompt("Enter the time worked"));
  InmediateBoss = (prompt("enter your immediate boss"));
  phone2 = (prompt("Enter The phone number"));
  

  JobReference = {
    bussines,
    position,
    TimeWorked,
    InmediateBoss,
    phone2

  };
return JobReference;
}
function profile() {
  profesion = (prompt("Enter Your Professional profile "));
 
  ProfileP = {
    profesion
  };
   return ProfileP;
}
function print() {
  printh = (prompt("¿print resume?"));
  return printH;
  printH = {
    printh
  };

}
;
while (menu !== 0) {
  menu = option();
  switch (menu) {
    case 1:
      personalif = DatePer();
      break;
    case 2:
      familyR = FamilyRefe();
      break
    case 3:
      JobReference = jobRefence();
      break
    case 4:
      ProfileP = profile();
      break
    case 5:
      print(personalif, familyR, JobReference, ProfileP);
      break
//    default:
//        alert("enter an option between 0 and 5");


  }
}
console.log("<---------------------------------------------------->");
//Imprimir Informacion personal//
console.log("PERSONAL INFORMATION: ");
console.log("Your name is: " + personalif.name);
console.log("Your identification number is: " + personalif.id);
console.log("His marital status is: " + personalif.status);
console.log("His address is:" + personalif.address);
console.log("Your phone number is: " + personalif.phone);
console.log("Your E-mail is: " + personalif.email);
//Imprimir informacion familiar//
console.log("<---------------------------------------------------->");
console.log("FAMILY REFERENCE: ");
console.log("He name is : " + familyR.name1);
console.log("He Relationship is: " + familyR.relationship);
console.log("The phone number is: " + familyR.phone1);
console.log("The charge is: " + familyR.position);
//Job reference*/
console.log("<---------------------------------------------------->");
console.log("JOB REFERENCE: ");
console.log("The company is: " + JobReference.bussines);
console.log("The charge is: " + JobReference.position);
console.log("The time worked is: " + JobReference.TimeWorked);
console.log("The Inmediate boss is: " + JobReference.InmediateBoss);
console.log("The phone number is: " + JobReference.phone2);
//ProfileP//
console.log("<---------------------------------------------------->");
console.log("PROFILE: ");
console.log("Your Professional profile is: " + ProfileP.profesion);