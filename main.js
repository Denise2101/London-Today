function menuToggle() {
  var x = document.getElementById("menuToggle");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function getWeather() {
  fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=1", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "e02174675bmshc9034d81a6feccep175c14jsncb751a0cc0de",
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    },
  })
    .then((response) => response.json()) //2
    .then((weather) => {
      console.log(weather["current"]);
      let weatherStatusText = weather["current"]["condition"].text;
      let weatherStatusIcon = weather["current"]["condition"].icon;
      let weatherTemperature = weather["current"]["temp_c"];
      let weatherHumidity = weather["current"]["humidity"] + "% ";
      document.getElementById("weatherResults").innerHTML =
        "<h2>Weather Today</h2><p>" +
        weatherStatusText +
        " <img src='https:" +
        weatherStatusIcon +
        "'></p></br><span>Temperature: " +
        weatherTemperature +
        "&#176;</span><br><span>Humidity: " +
        weatherHumidity +
        "</span>";
    });
}

getWeather();

$.ajax({
  type: "GET",
  url: "https://api.tfl.gov.uk/BikePoint/",

  // Request headers
  beforeSend: function (xhrObj) {
    xhrObj.setRequestHeader("Cache-Control", "no-cache");
  },
})
  .done(function (data) {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]["commonName"]);
      $("#bikePoints").append("<option>" + data[i]["commonName"] + "</option>");
    }
  })
  .fail(function () {
    alert("error");
  });
function bikePointShowMap() {
  let val = $("#bikePoints").val();
  alert(val);
  $("#bikeMaps").html(
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22346.28901187929!2d-0.11232421816115865!3d51.51703277008737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604abcc128291%3A0xbd5ceafc2f514e1c!2sMillennium%20Bridge!5e0!3m2!1sen!2suk!4v1617648356831!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  );
}

const options = {
  bottom: "64px", // default: '32px'
  right: "unset", // default: '32px'
  left: "32px", // default: 'unset'
  time: "0.5s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: false, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: true, // default: true
};
const darkmode = new Darkmode(options);
darkmode.showWidget();
