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

function updateLocation(event) {
  let locationTimeZone = event.target.value;
  if (locationTimeZone === "current") {
    locationTimeZone = moment.tz.guess();
  }
  let locationName = locationTimeZone.split("/")[1];
  let locationTime = moment().tz(locationTimeZone);
  let locationElement = document.querySelector("#cities");
  locationElement.innerHTML = `
  
  <div class="city">
    <div>
        <h2>${locationName}</h2>
        <div class="date">${locationTime.format("MMMM Do YYYY")}</div>
      </div>
        <div class="time">${locationTime.format(
          "h:mm:ss [<small>]A[</small>]"
        )} </div>
      </div>
    </div>
    <div class="all-cities">
    <a href="/">All cities</a>
    </div>
  `;
}

let locationSelectElement = document.querySelector("#location");

locationSelectElement.addEventListener("change", updateLocation);
