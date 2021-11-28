import { convertTemperatureToCelsius, getWindDirection, timestampToDate } from "../../utils";

export const Card = (props) => {
    console.log('CARD', props.weather)
    const { name, sys: { sunrise, sunset }, main: { temp }, weather: { 0: { description, icon } }, wind: { speed, deg }, } = props.weather;

    const celsius = convertTemperatureToCelsius(temp);
    const windDirection = getWindDirection(deg);

    const sunriseTime = timestampToDate(sunrise);
    const sunsetTime = timestampToDate(sunset)
    const convertedIcon = iconConvertion(icon)
    return (
        <div className='styling'>
            <p>City: {name}</p>
            <p>Temperature: {celsius}</p>
            <p>Sunrise time: {sunsetTime}</p>
            <p>Sunset time:  {sunriseTime}</p>
            <p>Weather: {description}</p>
            <img src={convertedIcon} />
            <p>Wind speed: {speed} km/h</p>
            <p>Wind direction: {windDirection}</p>
        </div>
    );
}
