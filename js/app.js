
const storage = new Storage();

// get stored location data
const weatherLocation = storage.getLocationData();

const api = new API(weatherLocation.city, weatherLocation.country );

const ui = new UI();


// get weather on DOM load 
document.addEventListener('DOMContentLoaded',getWeather);
// Add Prayer time on DOM load 
document.addEventListener('DOMContentLoaded',getPrayerTime);

// change location event 
document.getElementById('w-change-btn').addEventListener('click', changeLocation);

function changeLocation(e){
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    // change location 
    api.changeLocation(city,country);

    // set loaction LS
    storage.setLocationData(city,country);

    // get and display weather 
    getWeather();
    //get and display Prayer time 
    getPrayerTime();
    

    // city.value = "";
    e.preventDefault();
}

// call Prayer time response 
function getPrayerTime(){
    api.getPrayerTime()
    .then(results => {
        ui.printPryerTime(results);
        // console.log(results);
    })
    .catch(err => console.log(err));
}
// call Weather response 
function getWeather(){
    api.getWeather()
    .then(results => {
        ui.paint(results);
        // console.log(results);
    })
    .catch(err => console.log(err));
}
