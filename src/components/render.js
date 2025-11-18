class Renderer {

    constructor() {
        this.container = document.querySelector('.container');
        this.renderDiv = document.createElement('div');
        this.renderDiv.classList.add('render-div');
        this.container.appendChild(this.renderDiv);
    }
    
    async renderWeather(data) {
        const currWeatherCard = document.createElement('div');
        currWeatherCard.classList.add('curr-weather-card'); 
        
        const weatherIcon = document.createElement('img');
        weatherIcon.id = "weather-icon";

        const conditions = data.currentConditions.icon;
        const iconUrl = await this.loadWeatherIcon(conditions);
        weatherIcon.src = iconUrl;
        currWeatherCard.appendChild(weatherIcon);

        const info = document.createElement('div');
        info.classList.add('weather-info');
        info.innerHTML = `
        <center> <h2>${data.resolvedAddress}</h2> </center> <br>
        Current Temp: ${Math.round((data.currentConditions.temp-32)*5/9)} °C <br> 
        Feels Like: ${Math.round((data.currentConditions.feelslike-32)*5/9)} °C <br> 
        Conditions: ${data.currentConditions.conditions} <br>
        Humidity: ${data.currentConditions.humidity} % <br>
        Wind Speed: ${data.currentConditions.windspeed} Nots
        `;

        const forecaste1 = document.createElement('div');
        forecaste1.classList.add('forecaste-1');
        const info1 = document.createElement('div');
        info1.classList.add('weather-info-1');
        const daydata1 = new Date(data.days[0].datetime).toLocaleDateString("en-US",{weekday: "long"});
        info1.innerHTML = `
        <center> <h2>${daydata1}</h2> </center> <br>
        Current Temp: ${Math.round((data.days[0].temp-32)*5/9)} °C <br> 
        Feels Like: ${Math.round((data.days[0].feelslike-32)*5/9)} °C <br> 
        Conditions: ${data.days[0].conditions} <br>
        Humidity: ${data.days[0].humidity} % <br>
        Wind Speed: ${data.days[0].windspeed} Nots`

        const forecaste2 = document.createElement('div');
        forecaste2.classList.add('forecaste-2');
        const info2 = document.createElement('div');
        info2.classList.add('weather-info-2');
        const daydata2 = new Date(data.days[1].datetime).toLocaleDateString("en-US",{weekday: "long"});
        info2.innerHTML = `
        <center> <h2>${daydata2}</h2> </center> <br>
        Current Temp: ${Math.round((data.days[1].temp-32)*5/9)} °C <br> 
        Feels Like: ${Math.round((data.days[1].feelslike-32)*5/9)} °C <br> 
        Conditions: ${data.days[1].conditions} <br>
        Humidity: ${data.days[1].humidity} % <br>
        Wind Speed: ${data.days[1].windspeed} Nots`

        const forecaste3 = document.createElement('div');
        forecaste3.classList.add('forecaste-3');
        const info3 = document.createElement('div');
        info3.classList.add('weather-info-3');
        const daydata3 = new Date(data.days[3].datetime).toLocaleDateString("en-US",{weekday: "long"});
        info3.innerHTML = `
        <center> <h2>${daydata3}</h2> </center> <br>
        Current Temp: ${Math.round((data.days[3].temp-32)*5/9)} °C <br> 
        Feels Like: ${Math.round((data.days[3].feelslike-32)*5/9)} °C <br> 
        Conditions: ${data.days[3].conditions} <br>
        Humidity: ${data.days[3].humidity} % <br>
        Wind Speed: ${data.days[3].windspeed} Nots`

        const forecaste4 = document.createElement('div');
        forecaste4.classList.add('forecaste-4');
        const info4 = document.createElement('div');
        info4.classList.add('weather-info-4');
        const daydata4 = new Date(data.days[4].datetime).toLocaleDateString("en-US",{weekday: "long"});
        info4.innerHTML = `
        <center> <h2>${daydata4}</h2> </center> <br>
        Current Temp: ${Math.round((data.days[4].temp-32)*5/9)} °C <br> 
        Feels Like: ${Math.round((data.days[4].feelslike-32)*5/9)} °C <br> 
        Conditions: ${data.days[4].conditions} <br>
        Humidity: ${data.days[4].humidity} % <br>
        Wind Speed: ${data.days[4].windspeed} Nots`

        const forecaste5 = document.createElement('div');
        forecaste5.classList.add('forecaste-5');
        const info5 = document.createElement('div');
        info5.classList.add('weather-info-5');
        const daydata5 = new Date(data.days[5].datetime).toLocaleDateString("en-US",{weekday: "long"});
        info5.innerHTML = `
        <center> <h2>${daydata5}</h2> </center> <br>
        Current Temp: ${Math.round((data.days[5].temp-32)*5/9)} °C <br> 
        Feels Like: ${Math.round((data.days[5].feelslike-32)*5/9)} °C <br> 
        Conditions: ${data.days[5].conditions} <br>
        Humidity: ${data.days[5].humidity} % <br>
        Wind Speed: ${data.days[5].windspeed} Nots`

        currWeatherCard.appendChild(info);
        this.renderDiv.appendChild(currWeatherCard);

        forecaste1.appendChild(info1);
        this.renderDiv.appendChild(forecaste1);

        forecaste2.appendChild(info2);
        this.renderDiv.appendChild(forecaste2);
        
        forecaste3.appendChild(info3);
        this.renderDiv.appendChild(forecaste3);

        forecaste4.appendChild(info4);
        this.renderDiv.appendChild(forecaste4);

        forecaste5.appendChild(info5);
        this.renderDiv.appendChild(forecaste5);

    }

    async loadWeatherIcon(condition) {
    try {
        const iconModule = await import(`../assets/${condition}.png`);
        return iconModule.default; 
    } catch (err) {
        console.error("Icon not found:", condition);
        const fallback = await import('../assets/default.png');
        return fallback.default;
    }
}   
}

export {Renderer};