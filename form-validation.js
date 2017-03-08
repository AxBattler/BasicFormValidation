function validate(){
	//Grab the user's input and store in variables
	var userEntered = document.getElementById("user").value;
	var passEntered = document.getElementById("pass").value;
	// store length of username in var
	var nameLength = userEntered.length;
  
  
	//show username error message if length is too short
	if (nameLength < 6) {
		document.getElementById("usernameError").innerHTML="Bad username.";
		document.getElementById("usernameError").classList.remove("hidden-message");
		document.getElementById("usernameError").classList.add("shown-message");
		//Turn the username items red
		document.getElementById("usernameGroup").classList.add("has-error");
	}
	//otherwise flag successful username entry
	else {
		document.getElementById("usernameGroup").classList.add("has-success");
		
	}
	//show password error message if user entered "password" as a password
	if (passEntered.value == "password") {
		document.getElementById("passwordError").innerHTML="Bad password.";
		document.getElementById("passwordError").classList.remove("hidden-message");
		document.getElementById("passwordError").classList.add("shown-message");
		//Turn the password items red
		document.getElementById("passwordGroup").classList.add("has-error");
	}
	//otherwise flag successful password entry
	else {
		document.getElementById("passwordGroup").classList.add("has-success");
	}
}
