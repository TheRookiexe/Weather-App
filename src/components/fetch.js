class weatherFetch {

    constructor() {
        this.container = document.querySelector('.container');
        this.createSpinner();
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
        this.showspinner();
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
            return data;
        }
        catch(err) {
            return {error: err.message};
        } finally {
            this.hidespinner();
        }
    }   

    createSpinner() {
        const spinner = document.createElement('div');
        spinner.classList.add('spinner');
        document.body.appendChild(spinner);
    }
    
    showspinner() {
        document.querySelector('.spinner').style.display = 'flex';
    }

    hidespinner() {
        document.querySelector('.spinner').style.display = 'none';
    }
}

export {weatherFetch};