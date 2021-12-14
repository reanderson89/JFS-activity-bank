// DOM variables
const userCity = document.getElementById("city");
const weatherDisplay = document.getElementById("weather");
const cityList = document.getElementById("bonus-buttons");
const submitBtn = document.getElementById("submit-btn");

const makeRequest = async (userInput) => {
  console.log(userInput);
  let response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=46e1df487c204aaea80231816211312&q=${userInput}`
  );

  if (response.ok) {
    let data = await response.json();
    renderWeather(data);
    setCurrentCity(userInput);
    addCityButton(userInput);
  }

  if (response.status >= 400 && response.status <= 600) {
    console.log("error: " + response.status);
  }
};

if (!localStorage.getItem("city")) {
  localStorage.setItem("city", "");
} else {
  let currentCity = localStorage.getItem("city");
  makeRequest(currentCity);
}

const handleSubmit = (event) => {
  event.preventDefault();
  makeRequest(userCity.value.trim());
  userCity.value = "";
};

const renderWeather = (data) => {
  console.log(data);
  weatherDisplay.innerHTML = `<p>City: ${data.location.name}</p>
<p>Condition: ${data.current.condition.text}</p>
<img src="${data.current.condition.icon}">
<p>Current Temp: ${data.current.temp_f}°</p>
`;
};

const setCurrentCity = (city) => {
  localStorage.setItem("city", city);
};

const addCityButton = (city) => {
    let newButton = document.createElement("button");
    newButton.setAttribute("class", "cityBtn");
    newButton.innerText = city;
    cityList.appendChild(newButton);
}
