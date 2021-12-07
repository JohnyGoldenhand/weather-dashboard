import { convertTemperatureToCelsius, getWindDirection, timestampToDate, iconConvertion, getLocalTime } from "../../utils";

export const Card = (props) => {
    console.log('CARD', props.weather)
    const { name, sys: { sunrise, sunset }, main: { temp }, weather: { 0: { description, icon } }, wind: { speed, deg }, dt, timezone } = props.weather;


    const celsius = convertTemperatureToCelsius(temp);
    const windDirection = getWindDirection(deg);

    const sunriseTime = timestampToDate(sunrise);
    const sunsetTime = timestampToDate(sunset)
    const convertedIcon = iconConvertion(icon)

    const localTime = getLocalTime(dt, timezone)


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
