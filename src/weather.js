let city = document.querySelector("#weather span:first-child");
let weather = document.querySelector("#weather span:nth-child(2)");
let temp = document.querySelector("#weather span:last-child");

function geoSuccess(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  const apiKey = "b521ac344a5f8c3e76309d61ce138fd8"
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  fetch(url).then(resp => {return resp.json()
  }).then(data => {
    console.log(data)
    city.innerText = data.sys.country + ', '+ data.name
    weather.innerText = data.weather[0].main
    temp.innerText = data.main.temp + ' ℃'
    let icon = document.createElement("img")
    icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    weather.appendChild(icon)
  })
}
function geoFail() {
  alert('Cannot find you. No weather for you.')
}
navigator.geolocation.getCurrentPosition(geoSuccess, geoFail)