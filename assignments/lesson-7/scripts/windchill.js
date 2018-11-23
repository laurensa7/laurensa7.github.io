function windChill(tempf, speed) {
	var f= 35.74 + 0.6215*tempf - 35.74 * Math.pow (speed,0.16)+
		(0.4275*tempf*Math.pow(speed,0.16));
	//Round to 3 Decimals
	f = Math.round(f);
	//Return value
	return f;
	
		
}

function compute() {
	var temp = document.querySelector("#temperature").value;
	/*temp = parseFloat(temp);*/
	console.log(temp)
	var speed = document.querySelector("#windspeed").value;
	console.log(speed)
	
	console.log(windChill(temp,speed));
	
	div = document.querySelector("#output");
	div.value = "feels like " + windChill(temp,speed)
}

/*<form>
<label for = "temperature"> Temperature( * F): </label> 
<input type = "text" id = "temperature">
<label for = "windspeed"> Wind Speed(MPH): </label> 
<input type = "text" id = "windspeed">
<input type = "button" value = "wind chill" id = "cm">
</form>*/