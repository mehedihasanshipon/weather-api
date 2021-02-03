document.getElementById('search').addEventListener('click',function(){
    const location = document.getElementById('location').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location},&APPID=8563f7842bc953725c07e506f8d22e32`)
    .then(res => res.json())
    .then(data => displayTemp(data))
    .catch(error => console.log(error));

    function displayTemp(data){
        const name = data.name;
        const tempValue = data.main.temp;
        const id = data.weather[0].id;
        const weatherValue = data.weather[0].main;
    

        document.getElementById('city-name').innerText = name;
        document.getElementById('temp').innerText = Math.round(tempValue - 273);
        document.getElementById('weather').innerText = weatherValue;

        let tempIcon = document.getElementById('tempIcon');

        if(id < 800){
            tempIcon.src = "https://openweathermap.org/img/wn/50d@2x.png";
        }else if(id < 700){
            tempIcon.src = "https://openweathermap.org/img/wn/13d@2x.png";
        }else if(id < 600){
            tempIcon.src = "https://openweathermap.org/img/wn/10d@2x.png";
        }else if(id < 400){
            tempIcon.src = "https://openweathermap.org/img/wn/09d@2x.png";
        }else{
            tempIcon.src = "https://openweathermap.org/img/wn/11d@2x.png";
        }
    }
})



