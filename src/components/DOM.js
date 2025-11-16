import logo from '../assets/cloudy.png';
class Dom{
    constructor() {
        this.container = document.querySelector('.container');
    }

    header() {
        const headerDiv = document.createElement('div');
        headerDiv.id = "header-div";
        const logoDiv = document.createElement('img');
        const titleDiv = document.createElement('div');
        titleDiv.id = 'title-div';
        logoDiv.id = "logo-div";
        logoDiv.src = logo;
        titleDiv.textContent = "Weather App";
        headerDiv.appendChild(logoDiv);
        headerDiv.appendChild(titleDiv);
        this.container.appendChild(headerDiv);
    }
}

export {Dom};