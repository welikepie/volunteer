window.onload = function() {
	//document.getElementById("mc-embedded-subscribe").addEventListener("click",return exports.formGet());
}
var exports = {
	"formGet" : function() {
		var classNames = [];
		var JSON = {
			"classes" : {},
			"GROUPINGS" : [],
			"FNAME" : "",
			"LNAME" : "",
			"EMAIL" : ""
		};
		var tomerge = "";
		try {
			var checkboxes = document.getElementsByTagName("input");
			for (var i = 0; i < checkboxes.length; i++) { //go through all inputs
				if (checkboxes[i].type == "checkbox") { //if type is checkbox
					var found = false;
					for (var j = 0; j < classNames.length; j++) { //cycle through classnames
						if (classNames[j] == checkboxes[i].className) {
							found = true; //if found set found to true
						}
					}
					if (found != true) { //else add the new class name to the array.
						classNames.push(checkboxes[i].className);
					}
				}
			}
			for (var i = 0; i < classNames.length; i++) { //go through class names of checkboxes (regional groupings);
				//console.log(classNames[i]);
				var classText = classNames[i].replace(/_/g, " "); //classname
				var toSearch = document.getElementsByClassName(classNames[i]); //all checkboxes of that classname
				for (var j = 0; j < toSearch.length; j++) {
					if (JSON.classes[classText] == null) { //if JSON.classes hasn't been set yet;
						JSON.classes[classText] = ""; //set it to empty string.
					}
					if (toSearch[j].type == "checkbox") { //if type is checkbox
						if (toSearch[j].checked) {
							if (JSON.classes[classText].length > 0) {
								JSON.classes[classText] += ", "; //add commas if string is longer than nothing and is about to add an element.
							}
							JSON.classes[classText] += (toSearch[j].id).replace(/_/g, " "); //get the ID and replace the _ with " "
						}
					}
				}
				if (JSON.classes[classText].length > 0) {//if string exists
					JSON.GROUPINGS.push({ //push object to GROUPINGS object
						"name" : classText,
						"groups" : JSON.classes[classText]
					});
				}
				delete JSON.classes[classText];//delete it whatever happens.

			}
			delete JSON.classes; //delete the entire JSON.classes object
			JSON.FNAME = document.getElementById("JS-FNAME").value; //get values.
			JSON.LNAME = document.getElementById("JS-LNAME").value;
			JSON.EMAIL = document.getElementById("JS-EMAIL").value;
			//Now we have our JSON objects having parsed the checkboxes. Woop woop!
			
			exports.sendAcross(JSON);//send data to our sendAcross function. Might want to do some error checking here.
		} catch(e) {
			console.log(e.stack);
		}
		return false;//return false stops the submitting happening.
	},
	"sendAcross" : function(input) {
		var xhReq = new XMLHttpRequest(); //new POST request
		xhReq.open("POST", "/", true); //to the / URL
		xhReq.onreadystatechange = function() {
			console.log(xhReq.status);
			if (xhReq.readyState != 4) {
				console.log({
					"error" : xhReq.readyState //if error, log it
				});
			}
			var serverResponse = xhReq.responseText;
			console.log(serverResponse);//console.log the response
		};
		xhReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //form encoding
		xhReq.send("GROUPINGS="+JSON.stringify(input.GROUPINGS)+"&FNAME="+JSON.stringify(input.FNAME)+"&LNAME="+JSON.stringify(input.LNAME)+"&EMAIL="+JSON.stringify(input.EMAIL));
		// ^ Creating a URL string to post to the server.
	}
}
