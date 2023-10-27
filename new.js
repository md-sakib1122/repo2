

const apikey="4ac54dba8f17d75519f3d82b69461e39";

const apiURL="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox=document.querySelector(".src");
const srcbtn=document.querySelector(".btn");


async function chekWeather(city){
   const response = await fetch(apiURL+city+`&appid=${apikey}`)
    
   var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".tempval").innerHTML=Math.round(data.main.temp)+`°C`;
    document.querySelector(".humidity").innerHTML=data.main.humidity+`%`;
    document.querySelector(".windspeed").innerHTML=data.wind.speed+`km/h`;
    
    


}

srcbtn.addEventListener("click",function(){
  chekWeather(searchbox.value);
})

