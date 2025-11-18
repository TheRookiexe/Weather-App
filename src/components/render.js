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
        Conditions: ${data.currentConditions.conditions} <br>
        Wind Speed: ${data.currentConditions.windspeed} nots
        `;

        currWeatherCard.appendChild(info);
        this.renderDiv.appendChild(currWeatherCard);
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