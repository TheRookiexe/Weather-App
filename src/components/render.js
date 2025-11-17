class Renderer {

    constructor() {
        this.container = document.querySelector('.container');
        this.renderDiv = document.createElement('div');
        this.renderDiv.classList.add('render-div');
        this.container.appendChild(this.renderDiv);
    }
    
    renderWeather(data) {
        const weatherCard = document.createElement('div');
        weatherCard.classList.add('weather-card');
        weatherCard.textContent = "test text";

        this.renderDiv.appendChild(weatherCard);
    }
}

export {Renderer};