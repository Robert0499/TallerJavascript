class info {
  constructor() {
    this._personalif;
    this._familyInf;
    this._job;
    this._profile;

  }
  set personalif(personalif) {
    this._personalif = personalif;
  }
  get personalif() {
    return this._personalif;
  }
  set familyInf(familyInf) {
    this._familyInf = familyInf;
  }
  get familyInf() {
    return this._family_Inf;
  }
  set job(job) {
    this._job = job;
  }
  get job() {
    return this._job;
  }
  set profile(profile) {
    this._profile = profile;
  }
  get profile() {
    return this._profile;
  }
  print() {
    console.log("Personal information: ");
    console.log("Name: " + this._personalif.name);
    console.log("Your identification number is: " + this._personalif.id);
    console.log("His marital status is: " + this._personalif.status);
    console.log("Phone: " + this._personalif.phone);
    console.log("Addres: " + this._personalif.address);
    console.log("E-mail: " + this._personalif.email);

    console.log("Family Reference: ");
    console.log("Name: " + this._familyInf.name1);
    console.log("Relation: " + this._familyInf.relationship);
    console.log("Phone: " + this._familyInf.phone1);
    console.log("Position: " + this._familyInf.position);
    
    console.log("Job Reference: ");
    console.log("Company" + this._job.bussines);
    console.log("Position: " + this._job.position);
    console.log("Time worked" + this._job.time);
    console.log("Immediate boss: " + this._job.boss);
    console.lo("Phone number" + this._job.phone2);


    console.log("Professional profile:");
    console.log("Profile: " + this._profile.profile1);
  }

}
var z = new info();
do {
  var option = Number(prompt("Select an option to enter your data. \n\
1. Personal information \n\
2. Family reference\n\
3. Work reference \n\
4. Professional profile description\n\
5. Print Resume \n\
0. Quit the program "));
  switch (option) {
    case 1:
      name = (prompt("Enter your name"));
      id = (prompt("Enter your identification document"));
      status = (prompt("Enter your civil status"));
      address = (prompt("Enter your address"));
      phone = (prompt("Enter Your phone number"));
      email = (prompt("Enter yor E-mail"));
      personalif = {
        name,
        id,
        status,
        address,
        phone,
        email

      };
      z._personalif = personalif;
      break;
    case 2:
      name1 = (prompt("Enter the person's name"));
      relationship = (prompt("Enter relationship"));
      phone1 = (prompt("Enter phone number"));
      position = (prompt("Enter position "));
      familyInf = {
        name1,
        relationship,
        phone1,
        position
      };
      z._familyInf = familyInf;
      break;
    case 3:
      bussines = (prompt("Enter the company"));
      position = (prompt("Enter the position "));
      time = (prompt("Enter the time worked"));
      boss = (prompt("enter your immediate boss"));
      phone2 = (prompt("Enter The phone number"));


      job = {
        bussines,
        position,
        time,
        boss,
        phone2

      };
      z._job = job;
      break;
    case 4:
      profile1 = (prompt("Enter Your Professional profile "));
      
  profile = {
    profile1
  };
  z._profile = profile;
  break;
case 5:
z.print();
break;
case 0:
  alert("Thanks for using our program");
  }

} while (option !== 0)
