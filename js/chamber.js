//menu buttom on small view
function toggleMenu() {
    document.getElementsByClassName("nav-list")[0].classList.toggle("responsive");
}



//display last updated
var weekday = new Array(
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    );
var months = new Array(
    "January", "February","March", "April", "May", "June", "July", "August", "September","October", "November", "December"
    );
const year = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
var day = lastModified.getDay();
var day = weekday[day];
var month = lastModified.getMonth();
var month = months[month];

var lastModifiedFormatted = day + ', ' +  month + " " + lastModified.getDate() + " " + lastModified.getFullYear();

// Display copyright year and date last modified to footer of HTML document.
document.getElementById("dateLastModified").textContent = lastModifiedFormatted;


//weather API
let idahoFallsID = "";
const apiKey = "32da1ad47e5892254b0ea3b138b544bb";

const path = "https://api.openweathermap.org/data/2.5/onecall?lat=43.48&lon=-112.03&exclude=hourly,daily&units=imperial&appid=32da1ad47e5892254b0ea3b138b544bb";

fetch(path)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current').textContent = Math.round(jsObject.current.temp);
    document.getElementById('desc').textContent = jsObject.current.weather[0].description;
    document.getElementById('humidity').textContent = Math.round(jsObject.current.humidity);
    

    });