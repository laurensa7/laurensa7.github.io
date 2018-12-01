var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', '//api.openweathermap.org/data/2.5/weather?zip=83263,us&appid=87a8f86b8f2c57a0b3b94458c45bd89e&units=imperial', true);

weatherObject.send();

weatherObject.onload = function () {
	var weatherInfo = JSON.parse(weatherObject.responseText);
	console.log(weatherInfo)

	document.getElementById("place").innerHTML = weatherInfo.name;
	document.getElementById("currentTemp").innerHTML = weatherInfo.main.temp;
	document.getElementById("currentWind").innerHTML = weatherInfo.wind.speed;
	



} //end of the function
