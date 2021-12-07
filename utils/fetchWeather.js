export const fetchWeather = async (city) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},&APPID=22ff7e60113550c97d4b37724204a051`);
    const weather = await res.json();

    return weather;
};