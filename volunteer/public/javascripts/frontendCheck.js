window.onload = function() {
	//document.getElementById("mc-embedded-subscribe").addEventListener("click",return exports.formGet());
}
var exports = {
	"maxLists":3, //maximum region lists
	"clicked" : "",
	"classes" : ["JS-UKID", "JS-EUID", "JS-USID"],
	"errorEls" : {
		"FNAME" : $("#JS-EFNAME"),
		"LNAME" : $("#JS-ELNAME"),
		"EMAIL" : $("#JS-EEMAIL"),
		"GROUPINGS" : ""
	},
	"formGet" : function(element, count) {
		exports.clicked = element;
		$(".error").addClass("hidden");
		$(".success").addClass("hidden");
		//console.log(exports.clicked);
		var classNames = [];
		var JSON = {
			"count" : count,
			"classes" : {},
			"GROUPINGS" : [],
			"FNAME" : "",
			"LNAME" : "",
			"EMAIL" : ""
		};
		var tomerge = "";
		try {
			var checkboxes = document.getElementsByClassName(exports.classes[count])[0].getElementsByTagName("input");
			for (var i = 0; i < checkboxes.length; i++) {//go through all inputs
				if (checkboxes[i].type == "checkbox") {//if type is checkbox
					var found = false;
					for (var j = 0; j < classNames.length; j++) {//cycle through classnames
						if (classNames[j] == checkboxes[i].className) {
							found = true;
							//if found set found to true
						}
					}
					if (found != true) {//else add the new class name to the array.
						classNames.push(checkboxes[i].className);
					}
				}
			}
			for (var i = 0; i < classNames.length; i++) {//go through class names of checkboxes (regional groupings);
				////console.log(classNames[i]);
				var classText = classNames[i].replace(/_/g, " ");
				//classname
				var toSearch = document.getElementsByClassName(classNames[i]);
				//all checkboxes of that classname
				for (var j = 0; j < toSearch.length; j++) {
					if (JSON.classes[classText] == null) {//if JSON.classes hasn't been set yet;
						JSON.classes[classText] = "";
						//set it to empty string.
					}
					if (toSearch[j].type == "checkbox") {//if type is checkbox
						if (toSearch[j].checked) {
							if (JSON.classes[classText].length > 0) {
								JSON.classes[classText] += ", ";
								//add commas if string is longer than nothing and is about to add an element.
							}
							JSON.classes[classText] += (toSearch[j].id).replace(/_/g, " ");
							//get the ID and replace the _ with " "
						}
					}
				}
				if (JSON.classes[classText].length > 0) {//if string exists
					JSON.GROUPINGS.push({//push object to GROUPINGS object
						"name" : classText,
						"groups" : JSON.classes[classText]
					});
				}
				delete JSON.classes[classText];
				//delete it whatever happens.

			}
			delete JSON.classes;
			//delete the entire JSON.classes object
			JSON.FNAME = document.getElementById("JS-FNAME").value;
			//get values.
			JSON.LNAME = document.getElementById("JS-LNAME").value;
			JSON.EMAIL = document.getElementById("JS-EMAIL").value;
			//Now we have our JSON objects having parsed the checkboxes. Woop woop!

			if (exports.errorChecking(JSON) == true) {
				exports.sendAcross(JSON);
				//send data to our sendAcross function. Might want to do some error checking here.
			}
		} catch(e) {
			//console.log(e.stack);
		}
		return false;
		//return false stops the submitting happening.
	},
	"sendAcross" : function(input) {
		var xhReq = new XMLHttpRequest();
		//new POST request
		xhReq.open("POST", "/", true);
		//to the / URL
		xhReq.onreadystatechange = function() {
			//console.log(xhReq.status);
			if (xhReq.readyState != 4) {
				//console.log({
				//	"error" : xhReq.readyState //if error, log it
				//});
			}

			var serverResponse = null;
			try {
				if (xhReq.responseText != "") {
					serverResponse = JSON.parse(xhReq.responseText);
				}
			} catch(e) {
				//console.log(e.stack);
				//console.log(xhReq.responseText);
			}
			//console.log(serverResponse);
			if (serverResponse != null && serverResponse.test == false) {
				//console.log(serverResponse.error);
				//Error response from the mailchimp API here.
			} else if (serverResponse != null) {
				//alert("I AM A SUCCESS MESSAGE!");
				$("."+exports.classes[input.count]).find(".success").removeClass("hidden");
				//$("."+exports.classes[input.count]).getElementsByClassName(".success")[0].removeClass("hidden");
			}
		};
		xhReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		//form encoding
		xhReq.send("GROUPINGS=" + JSON.stringify(input.GROUPINGS) + "&FNAME=" + JSON.stringify(input.FNAME) + "&LNAME=" + JSON.stringify(input.LNAME) + "&EMAIL=" + JSON.stringify(input.EMAIL) + "&COUNT=" + JSON.stringify(input.count));
		// ^ Creating a URL string to post to the server.
	},
	"errorChecking" : function(input) {
		//make sure count is indeed there.

		//passing the JSON in to here to cycle through.
		var errorString = "";
		if (input.FNAME == "") {
			exports.displayError("FNAME",input.count);
			errorString += "1";
		}
		if (input.count < 0 || input.count > exports.maxLists) {
			console.log("Wrong range for count. (listIdCount)");
			errorString += "1";
		}
		if (input.LNAME == "") {
			exports.displayError("LNAME",input.count);
			errorString += "1";
		}
		if (/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}/.test(input.EMAIL) == false || input.EMAIL == "") {
			exports.displayError("EMAIL",input.count);
			errorString += "1";
		}
		if (input.GROUPINGS.length == 0) {
			exports.errorEls["GROUPINGS"] = $(exports.clicked).parent().siblings(".error");
			exports.displayError("GROUPINGS",input.count);
			errorString += "1";
		}
		if (errorString.length == 0) {
			return true;
		} else {
			//console.log("STUFF GETTING DONE!");
			return false;
		}
	},
	"displayError" : function(type, counts) {
		$("."+exports.classes[counts]).find(".error").removeClass("hidden");
		//console.log(type);
		//console.log(exports.errorEls[type]);
		exports.errorEls[type].removeClass("hidden");
	}
}
//console.log(exports.errorEls);
