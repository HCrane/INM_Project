// JavaScript Document

var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

function showCurrentTime() {
    var currentDate = new Date();
    var d = currentDate.getDay();
    var h = currentDate.getHours();
    var m = currentDate.getMinutes();
    var s = currentDate.getSeconds();
	var dayName = weekday[d];
	var time = document.createTextNode(dayName +": " + h + ":" + m + ":" + s);
    document.getElementById('currentTime').firstChild.nodeValue = time.nodeValue;
    t = setTimeout(function () {
        showCurrentTime()
    }, 1000);
}

function closeWelcomeMessage() {
	document.getElementById("welcomeMessage").style.display='none';
}

function multiply(number){
	var elements = document.getElementById('multiplyForm').elements;
	var product = 1;
	var factors = "";
	var length = elements.length - 1;
	for (var i = 0, element; i < length; i++) {
		element = elements[i];
		var input_value = document.getElementById(elements[i].id).value;
		if(input_value == "") {
			input_value = 0;
		}
		factors += input_value;
		if(i <= length-2) {
			factors +=  " * ";
		}
		product *= input_value;
	}
	alert("Product: " + factors + " = " + product);
}

function display(number) {
	var form = document.getElementById('multiplyForm')
	while(form.hasChildNodes()) {
		form.removeChild(form.firstChild);
	}
	for(var i = 0; i < number; i++){
		var newinput = document.createElement('input');
		var type = document.createAttribute("type");
		var name = document.createAttribute("name");
		var id = document.createAttribute("id");
		type.value 	= "number";
		id.value 	= "number" + i;
		name.value	= "number" + i;
		newinput.setAttributeNode(type);
		newinput.setAttributeNode(name);
		newinput.setAttributeNode(id);
		newinput.value = 0;
		form.appendChild(newinput);
	}
	var multiplyButton 	= document.createElement('button');
	var onclick 		= document.createAttribute("onclick");
	multiplyButton.type = "button";
	onclick.value 		= "multiply("+ number + "); return false;";
	multiplyButton.setAttributeNode(onclick);
	multiplyButton.innerHTML = "Multiply";
	form.appendChild(multiplyButton);	
}
