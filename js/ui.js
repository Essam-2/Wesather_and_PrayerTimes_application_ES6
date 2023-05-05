class UI{
    constructor(){
        // get Elements for Weather info
        this.location = document.getElementById("w-location");
        this.country = document.getElementById("w-country");
        this.desc = document.getElementById("w-desc");
        this.string = document.getElementById("w-string");
        this.details = document.getElementById("w-details");
        this.icon = document.getElementById("w-icon");
        this.humidity = document.getElementById("w-humidity");
        this.feelsLike = document.getElementById("w-feels-like");
        this.cloud = document.getElementById("w-cloud");  
        this.wind = document.getElementById("w-wind");

        // get Elements for Prayer Time info 
        this.fajr = document.getElementById('fajr');
        this.sunrise = document.getElementById('sunrise');
        this.dhuhr = document.getElementById('dhuhr');
        this.asr = document.getElementById('asr');
        this.maghrib = document.getElementById('maghrib');
        this.isha = document.getElementById('isha');
        this.day = document.getElementById('day');
        this.month = document.getElementById('month');
    }

    printPryerTime (prayer){
        this.fajr.textContent = JSON.stringify(prayer.data[0].timings.Fajr);
        this.sunrise.textContent = JSON.stringify(prayer.data[0].timings.Sunrise);
        this.dhuhr.textContent = JSON.stringify(prayer.data[0].timings.Dhuhr);
        this.asr.textContent = JSON.stringify(prayer.data[0].timings.Asr);
        this.maghrib.textContent = JSON.stringify(prayer.data[0].timings.Maghrib);
        this.isha.textContent = JSON.stringify(prayer.data[0].timings.Isha);
    }

    paint(weather){
        this.location.textContent = weather.location.name;
        this.country.textContent = weather.location.country;
        this.desc.textContent = weather.current.condition.text;
        this.string.textContent = `${weather.current.temp_c}C (${weather.current.temp_f}F)`;
        this.icon.setAttribute('src',weather.current.condition.icon);
        this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}%`;
        this.feelsLike.textContent = `Feels Like: ${weather.current.feelslike_c}C (${weather.current.feelslike_f}F)`;
        this.cloud.textContent = `Cloud: ${weather.current.cloud}%`;
        this.wind.textContent = `Wind: ${weather.current.wind_kph}`;
    }
}