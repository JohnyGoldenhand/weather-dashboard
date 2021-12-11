import { convertTemperatureToCelsius, getWindDirection, timestampToDate, iconConvertion } from "../../utils";

export const Card = (props) => {
    console.log('CARD', props.weather)
    const { name, sys: { sunrise, sunset }, main: { temp }, weather: { 0: { description, icon } }, wind: { speed, deg }, dt, timezone } = props.weather;


    const celsius = convertTemperatureToCelsius(temp);
    const windDirection = getWindDirection(deg);

    const sunriseTime = timestampToDate(sunrise, timezone);
    const sunsetTime = timestampToDate(sunset, timezone)
    const localTime = timestampToDate(dt, timezone)

    const convertedIcon = iconConvertion(icon)



    return (
        <div className='styling'>
            <p>City: {name}</p>
            <p>Temperature: {celsius}</p>
            <p>Sunrise time: {sunriseTime}</p>
            <p>Sunset time:  {sunsetTime}</p>
            <img src={convertedIcon} />
            <p>Weather: {description}</p>
            <p>Wind speed: {speed} km/h</p>
            <p>Wind direction: {windDirection}</p>
            <p>Time: {localTime}</p>
        </div>
    );
}
