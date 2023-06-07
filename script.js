//****Wrote code based on what was taught in class****//
// Christchurch
// let christchurchElement = document.querySelector("#christchurch");
// let christchurchDateElement = christchurchElement.querySelector(".date");
// let christchurchTimeElement = christchurchElement.querySelector(".time");
// let christchurchTime = moment().tz("Pacific/Auckland");

// christchurchDateElement.innerHTML = moment().format("MMMM Do YYYY");
// christchurchTimeElement.innerHTML = christchurchTime.format(
//   "h:mm:ss [<small>]A[</small>]"
// );

// Vancouver
// let vancouverElement = document.querySelector("#vancouver");
// let vancouverDateElement = vancouverElement.querySelector(".date");
// let vancouverTimeElement = vancouverElement.querySelector(".time");
// let vancouverTime = moment().tz("America/Vancouver");

// vancouverDateElement.innerHTML = moment().format("MMMM Do YYYY");
// vancouverTimeElement.innerHTML = vancouverTime.format(
//   "h:mm:ss [<small>]A[</small>]"
// );

//****Improved code by researching and creating functions to call each city based on id****//
//****Added interval function - possibly delete later****//
function displayTime(cities) {
  cities.forEach((city) => {
    let cityElement = document.querySelector(`#${city.id}`);
    let dateElement = cityElement.querySelector(".date");
    let timeElement = cityElement.querySelector(".time");

    setInterval(function () {
      let currentTime = moment().tz(city.timezone);
      dateElement.innerHTML = moment().format("MMMM Do YYYY");
      timeElement.innerHTML = currentTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }, 1000);
  });
}

let cities = [
  { id: "christchurch", timezone: "Pacific/Auckland" },
  { id: "vancouver", timezone: "America/Vancouver" },
  { id: "london", timezone: "Europe/London" },
  { id: "tokyo", timezone: "Asia/Tokyo" },
];

displayTime(cities);
