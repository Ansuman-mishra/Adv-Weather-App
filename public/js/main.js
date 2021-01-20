const btn = document.querySelector("#submitBtn");
const cityName = document.querySelector("#cityName");
const city_name = document.querySelector("#city_name");

const temp_real = document.querySelector("#temp_real");
const temp_status = document.querySelector("#temp_status");
const dataHide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerHTML = `<h3 style="color: red; font-size : 3rem">Searched bar cannot be empty plz enter the city name.</h3>`;
    dataHide.classList.add("data_hide");
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a8d79544208b94b2506998366bbed205`;
      const response = await fetch(url);
      const JData = await response.json();
      const arrData = [JData];

      temp_real.innerText = arrData[0].main.temp;
      // temp_status.innerText =
      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      const tempCond = `${arrData[0].weather[0].main}`;
      if (tempCond == "Sunny") {
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
      } else if (tempCond == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
      } else if (tempCond == "Rainy") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else if (tempCond == "Fog") {
        temp_status.innerHTML =
          "<i class='fas  fa-smog' style='color: #a4b0be;'></i>";
      } else if (tempCond == "Mist") {
        temp_status.innerHTML =
          "<i class='fas  fa-smog' style='color: #a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
      }
      dataHide.classList.remove("data_hide");
    } catch {
      city_name.innerText = `Plz enter the correct City Name`;
      dataHide.classList.add("data_hide");
    }
  }
};

btn.addEventListener("click", getInfo);
