// let response = fetch(
//   "http://api.openweathermap.org/data/2.5/weather?q=London&appid=124e98bd1e47dc311d703689c9585ae1"
// )
//   .then((response) => response.text())
//   .then((data) => console.log(data));

const submitbtn = document.getElementById("submit");
const inputbtn = document.getElementById("input");
let weatherdiv = document.getElementById("container");
let city = "";

submitbtn.addEventListener(
  "click",
  function (event) {
    event.preventDefault();
    city = inputbtn.value;
    console.log(city);
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=124e98bd1e47dc311d703689c9585ae1`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        weatherdiv.innerHTML = `Weather is ${data.weather[0].main}`;
        return data;
      });
  },
  false
);

// function getWeather(cityname) {
//   let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=124e98bd1e47dc311d703689c9585ae1`;
//   let response = fetch(url)
//     .then((response) => response.text())
//     .then((data) => (weatherdiv.innerHTML = `${cityname}....${data}`));
// }
