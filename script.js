// "use strict";

// document
//   .getElementById("darkModeButton")
//   .addEventListener("click", function () {
//     document.body.classList.toggle("darkMode");

//     let text = document.getElementById("darkModeButton");
//     if (text.innerHTML === "clear_night") {
//       text.innerHTML = "brightness_5";
//       text.classList.toggle("lightModeButton");
//     } else {
//       text.innerHTML = "clear_night";
//     }
//   });

// let lightModeIcon = function () {
//   document.getElementById("darkModeButton").innerHTML = "clear_night";
// };

let changeColours = function () {};

function currentTime() {
  let date = new Date();
  let hour = ("0" + date.getHours()).slice(-2);
  let minutes = ("0" + date.getMinutes()).slice(-2);
  let seconds = ("0" + date.getSeconds()).slice(-2);

  let time = hour + ":" + minutes + ":" + seconds;

  document.getElementById("timeText").innerText = time;
  document.getElementById("timeText").textContent = time;

  setTimeout(currentTime, 1000);
}

function currentDate() {
  let date = new Date();
  let day = date.getUTCDate() + 1;
  let dayName = date.toLocaleDateString("ro-RO", { weekday: "long" });
  let monthName = date.toLocaleString("ro-RO", { month: "long" });

  let completeDate = `Astăzi este ${dayName}, ${day} ${monthName}`;

  document.getElementById("dateText").innerText = completeDate;
  document.getElementById("dateText").textContent = completeDate;

  setTimeout(currentDate, 1000);
}

currentTime();
currentDate();
