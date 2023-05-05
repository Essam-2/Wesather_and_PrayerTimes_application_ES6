class API{
    constructor(city,country){
        this.apiKey = '9c89cd66e9a44f578b501526230704';
        this.city = city;
        this.country = country
    }

    // fetch weather from API 
    async getWeather(){
        const resposne = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}&aqi=yes`);
        const resposneData = await resposne.json();
        return resposneData;
    }

    // fetch Prayer Time API
    async getPrayerTime(){
        const resposnePrayerTime = await fetch(`https://api.aladhan.com/v1/calendarByCity/2023/4?city=${this.city}&country=${this.country}&method=4`);
        const resposne = await resposnePrayerTime.json();
        return resposne;
    }

    // change weather loctaion 
    changeLocation(city,country){
        this.city = city;
        this.country = country;
    }
}