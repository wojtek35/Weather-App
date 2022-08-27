class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }

    paint(current, locationData) {
        this.location.textContent = locationData.name
        if(locationData.region) {
            this.desc.textContent = `Region: ${locationData.region}, Country: ${locationData.country}`
        } else {
            this.desc.textContent = `Country: ${locationData.country}`
        }
        
        this.string.innerHTML = `${current.temp_c}<span>&#176;</span>C`
        // this.icon.setAttribute('src', 'some icon coming from api')
        this.humidity.textContent = `Relative humidity: ${current.humidity}%`
        this.feelsLike.textContent = ``
        this.feelsLike.innerHTML = `Feels like: ${current.feelslike_c}<span>&#176;</span>C`
        this.pressure.textContent = `Pressure: ${current.pressure_mb} hPa`
        this.wind.textContent = `Wind speed: ${current.wind_kph} KpH`
    }
}