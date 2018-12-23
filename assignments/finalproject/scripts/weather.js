//Weather for Nauvoo
					var weatherObject = new XMLHttpRequest();
					weatherObject.open('GET', '//api.openweathermap.org/data/2.5/weather?q=Nauvoo,Illnois,us&appid=87a8f86b8f2c57a0b3b94458c45bd89e&units=imperial', true);

					weatherObject.send();

					weatherObject.onload = function() {
						var weatherInfo = JSON.parse(weatherObject.responseText);
						console.log(weatherInfo);



						document.getElementById("currentTemps").innerHTML = weatherInfo.main.temp;






					} // end of function
					
					//Weather for Gilbert
					var weatherObject = new XMLHttpRequest();
					weatherObject.open('GET', '//api.openweathermap.org/data/2.5/weather?zip=85233,us&appid=87a8f86b8f2c57a0b3b94458c45bd89e&units=imperial', true);

					weatherObject.send();

					weatherObject.onload = function() {
						var weatherInfo = JSON.parse(weatherObject.responseText);
						console.log(weatherInfo);



						document.getElementById("currentTempo").innerHTML = weatherInfo.main.temp;






					} // end of function
					
					
					//Weather for Los Angeles
				var weatherObject = new XMLHttpRequest();
				weatherObject.open('GET', '//api.openweathermap.org/data/2.5/weather?zip=91780,us&appid=87a8f86b8f2c57a0b3b94458c45bd89e&units=imperial', true);

				weatherObject.send();

				weatherObject.onload = function() {
					var weatherInfo = JSON.parse(weatherObject.responseText);
					console.log(weatherInfo);



					document.getElementById("currentTempat").innerHTML = weatherInfo.main.temp;






				} // end of function
				
				
				
				//Weather for Idaho Falls
				var weatherObject = new XMLHttpRequest();
				weatherObject.open('GET', '//api.openweathermap.org/data/2.5/weather?zip=83402,us&appid=87a8f86b8f2c57a0b3b94458c45bd89e&units=imperial', true);

				weatherObject.send();

				weatherObject.onload = function() {
					var weatherInfo = JSON.parse(weatherObject.responseText);
					console.log(weatherInfo);



					document.getElementById("currentTempatur").innerHTML = weatherInfo.main.temp;






				} // end of function
				
				
				
				
				
				
				
				