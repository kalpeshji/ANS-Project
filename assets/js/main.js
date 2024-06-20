(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Sidebar toggle
   */
  if (select('.toggle-sidebar-btn')) {
    on('click', '.toggle-sidebar-btn', function (e) {
      select('body').classList.toggle('toggle-sidebar')
    })
  }

  /**
   * Search bar toggle
   */
  if (select('.search-bar-toggle')) {
    on('click', '.search-bar-toggle', function (e) {
      select('.search-bar').classList.toggle('search-bar-show')
    })
  }

  // /**
  //  * Navbar links active state on scroll
  //  */
  // document.addEventListener("DOMContentLoaded", function () {
  //   const cities = [
  //     { name: 'New York', timezone: 'America/New_York' },
  //     { name: 'London', timezone: 'Europe/London' },
  //     { name: 'Paris', timezone: 'Europe/Paris' },
  //     { name: 'Tokyo', timezone: 'Asia/Tokyo' },
  //     { name: 'Sydney', timezone: 'Australia/Sydney' },
  //     { name: 'Moscow', timezone: 'Europe/Moscow' }
  //   ];
  //   const weatherApiKey = 'YOUR_OPENWEATHERMAP_API_KEY';

  //   const getWeatherData = async (city) => {
  //     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`);
  //     return response.json();
  //   };

  //   const getTimeData = async (timezone) => {
  //     const response = await fetch(`http://worldtimeapi.org/api/timezone/${timezone}`);
  //     return response.json();
  //   };

  //   const createCard = (city, weather, time) => {
  //     return `
  //       <div class="col-md-4">
  //         <div class="card">
  //           <div class="card-header">
  //             ${city}
  //           </div>
  //           <div class="card-body">
  //             <h5 class="card-title">${weather.weather[0].description}</h5>
  //             <p class="card-text">Temperature: ${(weather.main.temp - 273.15).toFixed(2)}°C</p>
  //             <p class="card-text">Current Time: ${new Date(time.datetime).toLocaleTimeString()}</p>
  //           </div>
  //         </div>
  //       </div>
  //     `;
  //   };

  //   const loadCards = async () => {
  //     const cardsContainer = document.getElementById('cards-container');
  //     for (const city of cities) {
  //       const weather = await getWeatherData(city.name);
  //       const time = await getTimeData(city.timezone);
  //       const cardHTML = createCard(city.name, weather, time);
  //       cardsContainer.innerHTML += cardHTML;
  //     }
  //   };

  //   loadCards();
  // });


  // API

  // const apiKey = 'e4c4ca7b6c23f829c43cca5857ddba05'
  //   // FOR API KEY
  //   // Go to the link-  https://home.openweathermap.org/api_keys
  //   // Sign in
  //   // find your api key

  //   async function fetchWeatherData(city) {
  //     try {
  //       const response = await fetch(
  //         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  //       );

  //       if (!response.ok) {
  //         throw new Error("Unable to fetch weather data");
  //       }
  //       const data = await response.json();
  //       console.log(data);
  //       // console.log(data.main.temp);
  //       // console.log(data.name);
  //       // console.log(data.wind.speed);
  //       // console.log(data.main.humidity);
  //       // console.log(data.visibility);
  //       updateWeatherUI(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   const cityElement = document.querySelector(".city");
  //   const temperature = document.querySelector(".temp");
  //   const windSpeed = document.querySelector(".wind-speed");
  //   const humidity = document.querySelector(".humidity");
  //   const visibility = document.querySelector(".visibility-distance");

  //   const descriptionText = document.querySelector(".description-text");
  //   const date = document.querySelector(".date");
  //   const descriptionIcon = document.querySelector(".description i");

  //   // fetchWeatherData();

  //   function updateWeatherUI(data) {
  //     cityElement.textContent = data.name;
  //     temperature.textContent = `${Math.round(data.main.temp)}`;
  //     windSpeed.textContent = `${data.wind.speed} km/h`;
  //     humidity.textContent = `${data.main.humidity}%`;
  //     visibility.textContent = `${data.visibility / 1000} km`;
  //     descriptionText.textContent = data.weather[0].description;

  //     const currentDate = new Date();
  //     date.textContent = currentDate.toDateString();
  //     const weatherIconName = getWeatherIconName(data.weather[0].main);
  //     descriptionIcon.innerHTML = `<i class="material-icons">${weatherIconName}</i>`;
  //   }

  //   const formElement = document.querySelector(".search-form");
  //   const inputElement = document.querySelector(".city-input");

  //   formElement.addEventListener("submit", function (e) {
  //     e.preventDefault();

  //     const city = inputElement.value;
  //     if (city !== "") {
  //       fetchWeatherData(city);
  //       inputElement.value = "";
  //     }
  //   });

  //   function getWeatherIconName(weatherCondition) {
  //     const iconMap = {
  //       Clear: "wb_sunny",
  //       Clouds: "wb_cloudy",
  //       Rain: "umbrella",
  //       Thunderstorm: "flash_on",
  //       Drizzle: "grain",
  //       Snow: "ac_unit",
  //       Mist: "cloud",
  //       Smoke: "cloud",
  //       Haze: "cloud",
  //       Fog: "cloud",
  //     };

  //     return iconMap[weatherCondition] || "help";
  //   }


})();