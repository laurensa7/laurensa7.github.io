function windChill(tempf, speed) {
			return 35.74 + 0.6215 + tempf - 35.75 * Math.power;
		}

		function compute() {
			var temp = document.querySelector("windspeed");
			windChill,
			div = document.querySelector("output");
			temp = parseFloat(temp);
			speed = parseFloat(speed);
			div.textContent = "feels like" + chilltofixed()
		}
		document.querySelector("cmd").onclick = compute;
		<form>
			<
			label
		for = "temperature" > Temperature( * F): < /label> <
			input type = "text"
		id = "temperature" >
			<
			label
		for = "windspeed" > Wind Speed(MPH): < /label> <
			input type = "text"
		id = "windspeed" >
			<
			input type = "button"
		value = "wind chill"
		id = "cm" >
			<
			</form>