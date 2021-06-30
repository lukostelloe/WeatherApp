//DEFINE HTML ELEMENTS
const submitbtn = document.getElementById("submit");
const inputbtn = document.getElementById("input");
const body = document.getElementById("body");
const headline = document.getElementById("headline");
const infobox = document.getElementById("info");
const chartdiv = document.getElementById("chartdiv");
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
var myChart;
//FETCH THE WEATHER API AND DISPLAY INFO ON HTML

submitbtn.addEventListener("click", function (event) {
  event.preventDefault();
  city = inputbtn.value;
  console.log(city);
  if (myChart) {
    myChart.destroy();
  }

  //FETCH WEATHER OVER 5 DAYS
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=124e98bd1e47dc311d703689c9585ae1&units=metric`
  )
    .then((result2) => result2.json())
    .then((data2) => {
      console.log(data2);
      chartdiv.style.display = "block";
      let time = [];
      let temp = [];
      for (var i = 0; i < data2.list.length; i++) {
        time.push(data2.list[i].dt_txt);
        temp.push(data2.list[i].main.temp);
      }

      var ctx = document.getElementById("myChart").getContext("2d");
      myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: time,
          datasets: [
            {
              label: "temp over next 5 days",
              data: temp,
              borderColor: "rgb(75, 192, 192)",
              maintainAspectRatio: true,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    });

  //FETCH WEATHER FOR NOW
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=124e98bd1e47dc311d703689c9585ae1&units=metric`
  )
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      citydiv.innerHTML = `${city}`;
      weatherdiv.innerHTML = `${data.weather[0].main}`;
      tempdiv.innerHTML = Math.round(`${data.main.temp}`) + "&#8451";
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
