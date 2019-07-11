'use strict'

window.addEventListener('load', () => {
  let long;
  let lat;
  let tempretureDeegree = document.querySelector('.temperauter-degree');
  let temperatureDescription = document.querySelector('.temperature-description');
  let locationTimeZone = document.querySelector('.location-timezone');


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/13f54ac665fa61b6cf809d0cb273aa8a/${lat},${long}`;

      fetch(api)
        .then(Response => {
          return Response.json();
        })
        .then(data => {
          const { temperature, summary, icon } = data.currently;
          // set DOM elements from  the API

          tempretureDeegree.textContent = temperature;
          temperatureDescription.textContent = summary;
          locationTimeZone.textContent = data.timezone;

          // set icon 
          setIcons(icon, document.querySelector(".icon"));
        });
    });
  }

  function setIcons(icon, iconID) {
    const skycons = new Skycons({color: "white" });
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, skycons[currentIcon]);
  }


});