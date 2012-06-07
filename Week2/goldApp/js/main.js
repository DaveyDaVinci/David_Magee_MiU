// write your javascript in here

/*
David Magee
MiU 0612
Project 2
*/
//test
window.addEventListener("DOMContentLoaded", function(){
	
	//This is the getelementbyid function.  use the ce symbol to run the function
	function ce(x){
		var theElement = document.getElementById(x);
		return theElement;
	};
	
	//Adds options for planets
	function listPlanets (){
		var formTag = document.getElementsByTagName("form"), //This is an array
			selectLi = ce('planets'),
			makeHomePlanet = document.createElement('select');
			makeHomePlanet.setAttribute("id", "homeplanets");
		for(i=0, j=homePlanets.length; i<j; i++){
			var createOption = document.createElement('option');
			var optText = homePlanets[i]; 
			createOption.setAttribute("value", optText);
			createOption.innerHTML = optText;
			makeHomePlanet.appendChild(createOption);
		}
		selectLi.appendChild(makeHomePlanet);
	};
	
	
	//Adds options for skills
	
	function listSkills (){
		var formTag = document.getElementsByTagName("form"), //This is an array
			selectLi = ce('allskills'),
			makeSkills = document.createElement('select');
			makeSkills.setAttribute("id", "theskills");
		for(i=0, j=skillOptions.length; i<j; i++){
			var createOption = document.createElement('option');
			var optText = skillOptions[i]; 
			createOption.setAttribute("value", optText);
			createOption.innerHTML = optText;
			makeSkills.appendChild(createOption);
		}
		selectLi.appendChild(makeSkills);
	};
	

//listed below are the variables and calls for above functions
	//Planets Array
	var homePlanets = ["~~Allied Planets~~", "Earth", "Mars", "Pluto", "Vegas", 
	"~~Relkin Group~~", "Turos", "Heisinkr", "Velarius"];
	
	//calls to functions
	listPlanets();
	
	//Skills Array
	var skillOptions = ["~~Fighting Skills~~", "Swordsman", "Smasher", "Boxer", 
	"~~Shooting Skills~~", "Gunner", "Sniper", "Tank", "~~Thieving Skills~~", "Thief", 
	"Charmer", "Assassin", "~~Sorcery Skills~~", "Mage", "Wizard", "Shaman", 
	"~~Techster Skills~~", "Hacker", "Biotic", "Anarchist" ];
	
	
	//variable for errors shortcut below
	var  errMsg = ce('errors');
	//call to listskills function
	listSkills();	
	

	
	// find value of the gender button
	function getGender(){
		var selected = document.forms[0].gender;
		for(var i=0; i<selected.length; i++){
			if(selected[i].checked){
				genderValue = selected[i].value;
			}
		}
	};
	
	/* This is an example of if a check boxed was checked.  Note the if and else.
	function getGenderValue(){
		if(ce('checkboxIdHere').checked){
			valueInStoredObject = ce('checkBoxIdHere').value;
		}else{
			valueInStoredObject = "No"
		};
	}
	
	be sure to call the value outside of the scope of the function so it can be reused
	with a default value.  Default values are your friend.
	*/ 
	
	//Had to return the value as a variable to be used outside function
	var genderValue;
	
	function toggleControls(n){
			switch(n){
				case "on":
					ce('profileForm').style.display = "none"; //NEED PROPER TAG
					ce('cleardata').style.display = "inline"; //NEED PROPER TAG
					ce('displaydata').style.display = "none";
					ce('newdata').style.display = "inline";
					break; 
				case "off":
					ce('profileForm').style.display = "block";
					ce('cleardata').style.display = "inline"; 
					ce('displaydata').style.display = "inline";
					ce('newdata').style.display = "none";
					ce('info').style.display = "none";
					break;
				default:
					return false;
			}
	}
	
	
	function saveData(key){
		//If there is no key, its' a brand new item and we create a random key
		if(!key){
			var id 				= Math.floor(Math.random()*10000001);
		}else{
			//Sets the id to existing key to override data	
			id = key;
		}
		//this retrieves and gathers our form values and store in object.
		//Object properties contain array with the form label and input values.
		getGender();
		var item				= {};
		item.planet				= ["Home Planet: ", ce('homeplanets').value];
		item.skill				= ["Skill: ", ce('theskills').value];
		item.name				= ["Name: ", ce('name').value];
		item.born				= ["Born: ", ce('born').value];
		item.morality			= ["Morality: ", ce('morality').value];
		item.character			= ["Character: ", ce('character').value];
		item.bio				= ["Bio: ", ce('bio').value];
		item.gender				= ["Gender: ", genderValue ];
		//Save data into local storage: use Stringify to convert our object to a string.
		localStorage.setItem(id, JSON.stringify(item));
		alert("Profile Saved!");
	}
	
	
	
	
	//Get data function. Writes the data saved to the browser. 
	function getData(){
		toggleControls('on');
		if(localStorage.length === 0){
			alert("Nothing is stored in local storage. Default profiles were constructed.");
			constructDefaults();
		}
		var createDiv = document.createElement('div');
		createDiv.setAttribute("id", "info");
		var makeList = document.createElement('ul');
		createDiv.appendChild(makeList);
		document.body.appendChild(createDiv);
		ce('info').style.display = "display";
		for(i=0, j=localStorage.length; i<j; i++){
			var makeli = document.createElement('li');
			var linksLi = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var object = JSON.parse(value); //This converts string data back to object
			var sublist = document.createElement('ul');
			makeli.appendChild(sublist);
			getImage(object.planet[1], sublist); 
			for(var n in object){
				var listItems = document.createElement('li');
				sublist.appendChild(listItems);
				var subText = object[n][0] +" "+object[n][1];
				listItems.innerHTML = subText;
				sublist.appendChild(linksLi);
			}
			createItemLinks(localStorage.key(i), linksLi); //This creates the buttons for each item in the storage.
		}
	};
	
	
	//Gets the correct image for the category being displayed.
	function getImage(planName, sublist){
		var imageLi = document.createElement('li');
		sublist.appendChild(imageLi);
		var imageTag = document.createElement('img');
		var setSource = imageTag.setAttribute("src", "img/" + planName + ".png");
		imageLi.appendChild(imageTag);
	
	};
	
	
	//Autopopulate function
	
	function constructDefaults(){
		//Store the JSON data into local storage so we have default data
		for(var n in json){
			var id 				= Math.floor(Math.random()*10000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
	
	}
	//create the edit and delete links for the displayed data
	function createItemLinks(key, linksLi){ //this key is called from the function up above
		var editLink = document.createElement('a');
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Information";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);
		
		//break line to separate links
		var breakTag = document.createElement('br');
		linksLi.appendChild(breakTag);
		
		//this makes a delete item link
		var deleteLink = document.createElement('a');
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Information";
		deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	}
	
	function editItem(){
		//grabs data from local storage
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		
		//Shows form
		toggleControls("off");
		
		//populate form fields with current localStorage values
		
	
		ce('homeplanets').value = item.planet[1];
		ce('theskills').value = item.skill[1];
		ce('name').value = item.name[1];
		ce('born').value = item.born[1];
		ce('morality').value = item.morality[1];
		ce('character').value = item.character[1];
		ce('bio').value = item.bio[1];
		var radios = document.forms[0].gender;
			for (var i=0; i<radios.length; i++){
				if(radios[i].value == "Male" && item.gender[1] == "Male"){
					radios[i].setAttribute("checked", "checked");
				} else if (radios[i].value == "Female" && item.gender[1] == "Female"){
					radios[i].setAttribute("checked", "checked");
				} else if (radios[i].value == "Other" && item.gender[1] == "Other"){
					radios[i].setAttribute("checked", "checked");
				} else if (radios[i].value == "None" && item.gender[1] == "None"){
					radios[i].setAttribute("checked", "checked");
				}
		
		//Removes the initial listener from the save contact button so it won't make a new group
		saveLink.removeEventListener("click", saveData);
		//Then we want to change the submit button value to edit button
		ce('savedata').value = "Edit Profile";
		var editSubmit = ce('savedata');
		// Saves the key, value pair established in the function as a property of the edit submit event
		// so we can use that value when we save the data we edited. 
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key;
		
			}
		/* Checks for checkbox
		if(obj.favorite[1] == "Yes") {
			ce('fav').setAttribute("checked", checked");
		}
		*/
		
		}
	
	function deleteItem(){
		var ask = confirm("Are you sure you want to delete this profile?");
		if(ask){
			localStorage.removeItem(this.key);
			alert("Profile has been purged.");
			window.location.reload();
		} else {
			alert("Profile was spared from deletion.")
		}
	}
	
	function clearData(){
		if(localStorage.length === 0){
			alert("You haven't entered anything, mate.")
		} else {
			localStorage.clear();
			alert("All profiles have been deleted.");
			window.location.reload();
			return false;
		}
	}
	
	//This is a function that validates data in form fields
	function validate(e){
		//define the elements we want to check
		var getPlanet =     ce('homeplanets');
		var getSkills =		ce('theskills');
		var getName =     	ce('name');
		var getBorn =		ce('born');
		var getMorality = 	ce('morality');
		var getCharacter = 	ce('character');
		var getBio = 		ce('bio');
		var getGender = 	ce(genderValue);
		
		errMsg.innerHTML = "";
		getPlanet.style.border = "1px solid black";
		getSkills.style.border = "1px solid black";
		getName.style.border = "1px solid black";
		getBio.style.border = "1px solid black";

		
		//Error message 
		var errorAry = [];
		//Checks for validation
		if(getPlanet.value === "~~Allied Planets~~" || getPlanet.value === "~~Relkin Group~~"){
			var planetError = "Please choose a home planet.";
			getPlanet.style.border = "1px solid red";
			errorAry.push(planetError);
		}
		if( getSkills.value === "~~Fighting Skills~~" || getSkills.value === "~~Thieving Skills~~"  
		|| getSkills.value === "~~Shooting Skills~~" || getSkills.value === "~~Sorcery Skills~~"  
		|| getSkills.value === "~~Techster Skills~~"){
			var skillError = "Please choose a skill.";
			getSkills.style.border = "1px solid red";
			errorAry.push(skillError);
		}
		
		if(getName.value === ""){
			var nameError = "Please enter a name.";
			getName.style.border = "1px solid red";
			errorAry.push(nameError);
		}
		
		if(getBio.value === "" || getBio.value === "Type your mate's bio here..."){
			var bioError = "Please enter a bio.";
			getBio.style.border = "1px solid red";
			errorAry.push(bioError);
		}
		
		/* email validation which I won't use
		var re = /^\w+([\.-]?\w+)*@\w+([\.-]?/w+)*(\.\w{2,3})+ce/;
		if (!(re.exec.getEmail.value)){
			var emailError = "Please enter a valid email address.";
			itemKey.style.border = "1px solid red";
			errorAry.push(emailError);
			*/
		
		//Display errors on screen
		if (errorAry.length >= 1){
			for(var i=0, j=errorAry.length; i < j; i++){
				var txt = document.createElement('li');
				txt.innerHTML = errorAry[i];
				errMsg.appendChild(txt);
			} 
			e.preventDefault();
			return false;
		} else {
			//Returns store data if validates
			//this key value was passed through editsubmit as a property
			saveData(this.key);
			//sends the key value which came from editdata function.
		}
	}
		
	
	//Button Presses	
	var displayLink = ce('displaydata'); 
	displayLink.addEventListener("click", getData);
	var clearLink = ce('cleardata');
	clearLink.addEventListener("click", clearData);
	var saveLink =  ce('savedata');
	saveLink.addEventListener("click", validate); 

});

