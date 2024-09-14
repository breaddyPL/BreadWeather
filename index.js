// MADE WITH OPENWEATHERMAP API
// INSPIRED BY GREATSTACK
// MADE BY BREADDYPL
// WEATHER APP/WEBSITE
// AM I FILLING THIS UP A LITTLE? MAYBE
// HAVE A GOODDAY THO 
// OKAY HAVE A GOOD DAY :]

console.log("made by breaddyPL");
console.log("Isthisgood? cuz this one of my first projects")

const apiKey = "e67b4234f5ed8c1839f62fbcb712633c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
         document.querySelector(".weather").style.display = "none"
    }else{
        var data = await response.json();

        console.log(data);
    
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
    }
    
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
        
    }   
    }

    console.log("bruh");
    console.log("bruh");
    console.log("bruh");
 

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);    
})

checkWeather();
























































