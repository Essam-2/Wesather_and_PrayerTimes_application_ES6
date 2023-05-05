class Storage{
    constructor(){
        this.city;
        this.defaultCity = 'al-madinah';
        this.country;
        this.defaultCountry = 'Saudi Aribia';
    }

    getLocationData(){
        if(localStorage.getItem('city' === null && 'country' === null)){
            this.city = this.defaultCity;
            this.country = this.defaultCountry;
        }else{
            this.city = localStorage.getItem('city');
            this.country = localStorage.getItem('country');
        }
        return {
            city: this.city,
            country: this.country
        }
    }

    setLocationData(city,country){
        localStorage.setItem('city',city);
        localStorage.setItem('country',country);
    }
}