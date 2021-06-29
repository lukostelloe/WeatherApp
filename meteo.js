// let response = fetch(
//   "http://api.openweathermap.org/data/2.5/weather?q=London&appid=124e98bd1e47dc311d703689c9585ae1"
// )
//   .then((response) => response.text())
//   .then((data) => console.log(data));

const submitbtn = document.getElementById("submit");
const inputbtn = document.getElementById("input");
const body = document.getElementById("body");
const headline = document.getElementById("headline");
const infobox = document.getElementById("info");
let containerdiv = document.getElementById("container");
let citydiv = document.getElementById("citydiv");
let weatherdiv = document.getElementById("weatherdiv");
let tempdiv = document.getElementById("tempdiv");
let city = "";
var cloudsimage = document.createElement("img");
cloudsimage.src = "images/clouds.jpg";
var rainimage = document.createElement("img");
rainimage.src = "images/rain.jpg";
var clearimage = document.createElement("img");
clearimage.src = "images/clear.jpg";

submitbtn.addEventListener("click", function (event) {
  event.preventDefault();
  city = inputbtn.value;
  console.log(city);
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=124e98bd1e47dc311d703689c9585ae1`
  )
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      citydiv.innerHTML = `${city}`;
      weatherdiv.innerHTML = `${data.weather[0].main}`;
      tempdiv.innerHTML = Math.round(`${data.main.temp}` - 273.15) + "&#8451";
      if (data.weather[0].main == "Clouds") {
        body.classList.add("cloudy");
        body.classList.remove("rainy");
        body.classList.remove("cleary");
        headline.style.display = "none";
        infobox.style.display = "flex";
      } else if (data.weather[0].main == "Rain") {
        body.classList.add("rainy");
        body.classList.remove("cloudy");
        body.classList.remove("cleary");
        headline.style.display = "none";
        infobox.style.display = "flex";
      } else if (data.weather[0].main == "Clear") {
        body.classList.add("cleary");
        body.classList.remove("rainy");
        body.classList.remove("cloudy");
        headline.style.display = "none";
        infobox.style.display = "flex";
      }
    });
});
