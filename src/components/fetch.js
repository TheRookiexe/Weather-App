export async function fetchData(API,city) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API}`);
    const data = await response.json();
    console.log(data);
}   