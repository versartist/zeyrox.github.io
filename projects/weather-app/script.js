const search = document.querySelector('.input-box');
const searchBtn = document.querySelector('.search-btn');


async function checkWeather(){
    const place =search.value;   
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=f900083e5a558249fb283afaae09bdb1&q=${place}`;
    const responce= await fetch(url);
    const data = await responce.json();
    const weatherIcon = document.querySelector('.weather-icon');
    console.log(data);
       
    document.querySelector('.temp-value').innerHTML = Math.round ( data.main.temp);
    document.querySelector('.name').innerHTML =data.name;
    document.querySelector('.wind-value').innerHTML =Math.round ((data.wind.speed)*3.6);
    document.querySelector('.humidity-value').innerHTML =data.main.humidity;

    if(data.weather[0].main == "Mist")
     { weatherIcon.style.backgroundImage = 'url(images/mist.png)'}

    else if(data.weather[0].main == "Clouds")
     { weatherIcon.style.backgroundImage = 'url(images/clouds.png)'}
    
else if(data.weather[0].main == "Rain")
     { weatherIcon.style.backgroundImage = 'url(images/rain.png)'}
    
     else if(data.weather[0].main == "Snow")
     { weatherIcon.style.backgroundImage = 'url(images/snow.png)'}
    
else
// (data.weather[0].main == "Drizzle")
     { weatherIcon.style.backgroundImage = 'url(images/drizzle.png)'}
     document.querySelector('.weather-info').style.display = "block";
      document.querySelector(".container").style.height = "80%"    
};
searchBtn.addEventListener('click' ,()=> {checkWeather()})
document.addEventListener("keydown",(event)=>{ 
    if (event.key === "Enter") {checkWeather();}
 });


