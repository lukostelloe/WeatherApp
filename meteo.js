// let response = fetch(
//   "http://api.openweathermap.org/data/2.5/weather?q=London&appid=124e98bd1e47dc311d703689c9585ae1"
// )
//   .then((response) => response.text())
//   .then((data) => console.log(data));

let cityname;

function getWeather(cityname) {
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=124e98bd1e47dc311d703689c9585ae1`;
  let response = fetch(url)
    .then((response) => response.text())
    .then((data) =>
      console.log(
        `Here's the weather information for ${cityname} .......................................................................................... ${data}`
      )
    );
}

getWeather("Dublin");
