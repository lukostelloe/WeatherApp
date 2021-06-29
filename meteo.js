//DEFINE HTML ELEMENTS
const submitbtn = document.getElementById("submit");
const inputbtn = document.getElementById("input");
const body = document.getElementById("body");
const headline = document.getElementById("headline");
const infobox = document.getElementById("info");
let containerdiv = document.getElementById("container");
let citydiv = document.getElementById("citydiv");
let weatherdiv = document.getElementById("weatherdiv");
let tempdiv = document.getElementById("tempdiv");

//DEFINING VARIABLES AND IMAGES

let city = "";
var cloudsimage = document.createElement("img");
cloudsimage.src = "images/clouds.jpg";
var rainimage = document.createElement("img");
rainimage.src = "images/rain.jpg";
var clearimage = document.createElement("img");
clearimage.src = "images/clear.jpg";

//FETCH THE WEATHER API AND DISPLAY INFO ON HTML

submitbtn.addEventListener("click", function (event) {
  event.preventDefault();
  city = inputbtn.value;
  console.log(city);
  //FETCH WEATHER OVER 5 DAYS
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=124e98bd1e47dc311d703689c9585ae1`
  )
    .then((result2) => result2.json())
    .then((data2) => {
      console.log(data2);
    });
  //FETCH WEATHER FOR NOW
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

const config = {
  type: "line",
  data,
  options: {},
};

const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

var myChart = new Chart(document.getElementById("myChart"), config);
