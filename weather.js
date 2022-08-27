class Weather {
    constructor(city) {
        this.apiKey = '8582bfdc63dd435f8ca150208222608';
        this.city = city;
    }

    // Fetch weather from API
    async getWeather() {
        // const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}q=${city}&aqi=no`)

        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}&aqi=no`)
        
        const responseData = await response.json();
        const current = await responseData.current;
        const location = await responseData.location;
        return {
            current,
            location,
        };
    }

    changeLocation(city) {
        this.city = city;
    }
}