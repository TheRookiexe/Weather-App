import './style.css';
import { Dom } from './components/DOM.js';
import { weatherFetch } from './components/fetch.js';
import { Renderer } from './components/render.js';

const API = "YUHMJ8NXB8R8ULNQN9XXET95Y";

const domCreate = new Dom();
domCreate.header();
const {searchBar, searchBtn} = domCreate.search();
        
const fetData = new weatherFetch();
const renderWth = new Renderer();

searchBtn.addEventListener('click', async()=> {
    const cityName = searchBar.value.trim();
    if(!cityName) return alert('Enter a valid city name!')
    const data = await fetData.fetchData(API, cityName);
    if(data.error) {
        fetData.showError(data.error);
    }else {
        renderWth.renderWeather(data);
    }
});