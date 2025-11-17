class weatherFetch {

    constructor() {
        this.container = document.querySelector('.container');
    }

    showError(message) { 
        const errorBox = document.createElement('div');
        errorBox.classList.add('error-Box');
        errorBox.textContent = `${message}!`;
        errorBox.style.display = "block";
        this.container.appendChild(errorBox);
        setTimeout(() => {
            errorBox.style.opacity = "0";
            setTimeout(() => {
                errorBox.remove();
            }, 500);
        }, 2000);
    }

    async fetchData(API,city) {
        try {
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API}`);
            if(!response.ok){
                if(response.status === 400) {
                    throw new Error("Invalid city name. please check your spelling")
                } else if (response.status === 404) {
                    throw new Error("City not found")
                } else {
                    throw new Error(`Error: ${response.status}`);    
                }    
            }
            const data = await response.json();
            console.log(data);
            return data;
        }
        catch(err) {
            return {error: err.message};
        }
    }   

}

export {weatherFetch};