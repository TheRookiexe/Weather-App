import logo from '../assets/cloudy.png';
import srhIcon from '../assets/search.png'
class Dom{
    constructor() {
        this.container = document.querySelector('.container');
    }

    header() {
        const headerDiv = document.createElement('div');
        headerDiv.id = "header-div";

        const logoDiv = document.createElement('img');
        logoDiv.id = "logo-div";
        logoDiv.src = logo;

        const titleDiv = document.createElement('div');
        titleDiv.id = 'title-div';
        titleDiv.textContent = "Weather App";

        headerDiv.appendChild(logoDiv);
        headerDiv.appendChild(titleDiv);
        this.container.appendChild(headerDiv);
    }

    search() {
        const searchDiv = document.createElement('search');
        searchDiv.id = "search-div"

        const searchBar = document.createElement('input');
        searchBar.id = "search-bar";
        searchBar.type = 'text';
        searchBar.name = "locationName";
        searchBar.setAttribute('required', "");
        searchBar.setAttribute('autofocus', "");
        searchBar.placeholder = "Enter a Locations Name...."
        
        const searchBtn = document.createElement('button');
        searchBtn.id = "search-btn";
        
        const btnIcon = document.createElement('img');
        btnIcon.id = "btn-icon";
        btnIcon.src = srhIcon;

        searchBtn.appendChild(btnIcon);
        searchDiv.appendChild(searchBar);
        searchDiv.appendChild(searchBtn);
        this.container.appendChild(searchDiv);
    }
}

export {Dom};