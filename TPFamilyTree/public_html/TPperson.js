var family=[parent1, parent2, enfant1, mari1, kid1, kid2, kid3, enfant2, mari2, kidda, enfant3, femme1, enfant4];
function person(name, firstname, age, kind, profession, mother, father, brothers, sisters, profilPicture){
	this.name=name;
	this.firstname=firstname;
	this.age=age;
	this.kind=kind;
	this.profession=profession;
	this.mother=mother;
	this.father=father;
	this.brothers=brothers;
	this.sisters=sisters;
	this.profilPicture=profilPicture;

	if (kind == "M") {
		var man = "img/homme.png";
		this.profilPicture = man;
	}else if (kind == "f") {
		var woman = "img/femme.jpg";
		this.profilPicture = woman;
	}

	this.addMother = function(name, firstname, age, kind, profession, mother, father, brothers, sisters, profilPicture) {
		this.mother.push(new person(name, firstname, age, kind, profession, mother, father, brothers, sisters, profilPicture));
		family.push(this.mother);
	};

	this.addFather = function(name, firstname, age, kind, profession, mother, father, brothers, sisters, profilPicture) {
		this.father.push(new person(name, firstname, age, kind, profession, mother, father, brothers, sisters, profilPicture));
		family.push(this.father);
	};

	this.addBrothers = function(name, firstname, age, kind, profession, mother, father, brothers, sisters, profilPicture) {
		this.brothers.push(new person(name, firstname, age, kind, profession, mother, father, brothers, sisters, profilPicture));
		family.push(this.brothers);
	};

	this.addSisters = function(name, firstname, age, kind, profession, mother, father, brothers, sisters, profilPicture) {
		this.sisters.push(new person(name, firstname, age, kind, profession, mother, father, brothers, sisters, profilPicture));
		family.push(this.sisters);
	};

//name
//var name = prompt("Enter your name");
// if (name == undefined || name == "" || name == null){
// 	this.name = undefined;
// }
// else{
// 	this.name = name;
// }
// /*********************************************/

// // //firstname
// // //var firstname = prompt("Enter your firstname here :");
// // if (firstname== undefined || firstname== "" || firstname== null){
// // 	var firstname = prompt("write your real name");
// // }
// // else{
// // 	this.firstname = firstname;
// // }
// // /****************************************/

// //age
// //var age = 0;

// //var age = prompt("Enter your age");
// if(age == undefined || age == "" || age == null){
// 	this.age = undefined;
// }
// else {
// 	this.age = age; 
// }
// /*********************************************/

// //var kind = prompt("Male or Female");

// if (kind == "f" ||kind == "F" ||kind == "m" ||kind == "M" ) {
// 	this.kind = kind;

// }else {
// 	this.kind= undefined;
// }

// //var profession = prompt("your profession");

// if(profession == undefined || profession == "" || profession == null) {
// 	this.profession= undefined;

// }else {
// 	this.profession = profession;

// }
}
//grand parents
var grandmere1 = new person("Lassale", "Jackie", 68, "f", "secrétaire",[],[],[],[],[]);

var grandpere1 = new person("Lassale", "Bertrand", 70, "M", "caviste",[],[],[],[],[]);

var grandpere2 = new person("Grimp", "Michèle", 72, "M", "directeur d'agence",[],[],[],[],[]);

var grandmere2 = new person("Grimp", "Hélène", 68, "f", "infirmière",[],[],[],[],[]);


// famille 1
var parent1 = new person("Lassale", "Jacob", 58, "M", "Médecin",[grandmere1],[grandpere1],[],[],[]);


////////////////////////////////////////////////////////////////////////


//famille 2
var parent2 = new person("Lassale", "Audrey", 56, "f", "secrétaire de direction",[grandmere2],[grandpere2],[],[],[]);


////////////////////////////////////////////////////////////////////////////////////////




// famille 3
var enfant1 = new person("Stump", "Evelynne",38 , "f", "vendeuse",[],[],[],[],[]);
enfant1.addMother(parent2);
enfant1.addFather(parent1);

var mari1 = new person("Stump", "Antoine", 32, "M", "Chômeur",[],[],[],[],[]);


var kid1 = new person("Stump", "Cynthia", 10, "f", "écolière",[],[],[],[],[]);
kid1.addMother(enfant1);
kid1.addFather(mari1);
kid1.addBrothers("Stump", "Kevin", 12, "M", "collègien",[enfant1],[mari1],[kid1],[kid3],[]);
kid1.addSisters("Stump", "Camille", 16, "f", "lycéenne",[enfant1],[mari1],[kid2],[kid1],[]);

var kid2 = new person("Stump", "Kevin", 12, "M", "collègien",[],[],[],[],[]);
kid2.addMother(enfant1);
kid2.addFather(mari1);
kid2.addSisters("Stump", "Cynthia", 10, "f", "écolière",[enfant1],[mari1],[kid2],[kid3],[]);
kid2.addSisters("Stump", "Camille", 16, "f", "lycéenne",[enfant1],[mari1],[kid2],[kid1],[]);


var kid3 = new person("Stump", "Camille", 16, "f", "lycéenne",[],[],[],[],[]);
kid3.addMother(enfant1);
kid3.addFather(mari1);
kid3.addSisters("Stump", "Cynthia", 10, "f", "écolière",[enfant1],[mari1],[kid2],[kid3],[]);
kid3.addBrothers("Stump", "Kevin", 12, "M", "collègien",[enfant1],[mari1],[],[kid3, kid1],[]);
///////////////////////////////////////////////////////////////////////////



// famille 4
var enfant2 = new person("Azare", "Sandrine", 36, "f", "Chef de projet",[parent1],[parent2],[],[],[]);
enfant2.addMother(parent2);
enfant2.addFather(parent1);


var mari2 = new person("Azare", "Sylvain", 35, "M", "Auto-entrepreuneur");

var kidda = new person("Azare", "Quentin", 8, "M", "primaire",[],[],[],[],[]);
kidda.addMother(enfant2);
kidda.addFather(mari2);
//////////////////////////////////////////////////////////////////////////////////


// famille 5
var enfant3 = new person("Lassale", "Jacques", 37, "M", "Fleuriste",[],[],[],[],[]);
enfant3.addMother(parent2);
enfant3.addFather(parent1);

var femme1 = new person("Lassale", "Sophie", 35, "f", "Vendeuse",[],[],[],[],[]);
/////////////////////////////////////////////////////////////////////



//famille 6
var enfant4 = new person("Lassale", "Arthur", 30, "M", "Policier",[],[],[],[],[]);
enfant4.addMother(parent2);
enfant4.addFather(parent1);
/////////////////////////////////////////////////////////////////////////
var family=[grandmere1, grandpere1, grandpere2, grandmere2,parent1, parent2, enfant1, mari1, kid1, kid2, kid3, enfant2, mari2, kidda, enfant3, femme1, enfant4];



for (var i = family.length - 1; i >= 0; i--) {


	

	var bprofil = document.createElement('IMG');
	bprofil.setAttribute("width", "150");
	bprofil.setAttribute("height", "128");
	bprofil.id = "profilPicture";
	bprofil.src = family[i].profilPicture;
	document.getElementById("person").appendChild(bprofil);

	var bName = document.createElement('DIV');
	bName.id = "name";
	bName.innerHTML = family[i].name;
	document.getElementById("person").appendChild(bName);

	var bFirstname = document.createElement('DIV');
	bFirstname.id = "fisrtname";
	bFirstname.innerHTML = family[i].firstname;
	document.getElementById("person").appendChild(bFirstname);

	var bAge = document.createElement('DIV');
	bAge.id = "age";
	bAge.innerHTML = family[i].age;
	document.getElementById("person").appendChild(bAge);

	var bKind = document.createElement('DIV');
	bKind.id = "kind";
	bKind.innerHTML = family[i].kind;
	document.getElementById("person").appendChild(bKind);

	var bProfession = document.createElement('DIV');
	bProfession.id = "profession";
	bProfession.innerHTML = family[i].profession;
	document.getElementById("person").appendChild(bProfession);

	// var bFather = document.createElement('DIV');
	// bFather.id = "brothers";
	// bFather.innerHTML = family[i].firstname;
	// document.getElementById("person").appendChild(bFather);



	document.getElementById("person").appendChild(document.createElement('BR'));
}
	document.getElementById("person").appendChild(element);






// console.log(test);
//console.log(person.firstname);
