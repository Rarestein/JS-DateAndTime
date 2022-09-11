// "use strict";

document
	.getElementById("darkModeButton")
	.addEventListener("click", function () {
		document.body.classList.toggle("darkMode");

		let text = document.getElementById("darkModeButton");
		if (text.innerHTML === "clear_night") {
			text.innerHTML = "brightness_5";
			text.classList.toggle("lightModeButton");
		} else {
			text.innerHTML = "clear_night";
		}
	});

function lightModeIcon() {
	document.getElementById("darkModeButton").innerHTML = "clear_night";
}

function currentTime() {
	let date = new Date();
	let hour = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	hour = hour < 10 ? "0" + hour : hour;
	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;

	let time = hour + ":" + minutes + ":" + seconds;

	document.getElementById("timeText").innerText = time;
	document.getElementById("timeText").textContent = time;

	setTimeout(currentTime, 1000);
}

function currentDate() {
	let date = new Date();
	let dayOfWeek = date.getUTCDay();
	let day = date.getUTCDate() + 1;
	let month = date.getUTCMonth();

	let dayName, monthName;

	switch (dayOfWeek) {
		case 0:
			dayName = "luni";
			break;
		case 1:
			dayName = "marți";
			break;
		case 2:
			dayName = "miercuri";
			break;
		case 3:
			dayName = "joi";
			break;
		case 4:
			dayName = "vineri";
			break;
		case 5:
			dayName = "sâmbătă";
			break;
		case 6:
			dayName = "duminică";
			break;
	}

	switch (month) {
		case 0:
			monthName = "ianuarie";
			break;
		case 1:
			monthName = "februarie";
			break;
		case 2:
			monthName = "martie";
			break;
		case 3:
			monthName = "aprilie";
			break;
		case 4:
			monthName = "mai";
			break;
		case 5:
			monthName = "iunie";
			break;
		case 6:
			monthName = "iulie";
			break;
		case 7:
			monthName = "august";
			break;
		case 8:
			monthName = "septembrie";
			break;
		case 9:
			monthName = "octombrie";
			break;
		case 10:
			monthName = "noiembrie";
			break;
		case 11:
			monthName = "decembrie";
			break;
	}

	let completeDate = `Astăzi este ${dayName}, ${day} ${monthName}`;

	document.getElementById("dateText").innerText = completeDate;
	document.getElementById("dateText").textContent = completeDate;

	setTimeout(currentDate, 1000);
}

currentTime();
currentDate();
