class Storage {
    constructor() { 
        this.city;
        this.defaultCity = 'Miami';
    }

    getLocationData() {
        const city = localStorage.getItem('city')
        if (!city) {
            this.city = this.defaultCity
        } else {
            this.city = city
        }
        return this.city
    }

    setLocationData(city) {
       localStorage.setItem('city', city)
    }
} 