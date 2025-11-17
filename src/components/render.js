class Renderer {

    constructor() {
        this.container = document.querySelector('.container');
        this.renderDiv = document.createElement('div');
        this.renderDiv.classList.add('render-div');
        this.container.appendChild(this.renderDiv);
    }
    
    renderWeather(data) {
        const currWeatherCard = document.createElement('div');
        currWeatherCard.classList.add('curr-weather-card');
        currWeatherCard.textContent = `${data.resolvedAddress}<br> Current Temp: ${Math.round((data.currentConditions.temp-32)*5/9)} °C`;
        this.renderDiv.appendChild(currWeatherCard);
    }
}

export {Renderer};