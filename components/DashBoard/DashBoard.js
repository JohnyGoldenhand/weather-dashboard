// import './DashBoard.css'

export const Dashboard = (props) => {
    console.log(props.weather)

    const { name, sys: { sunrise, sunset }, main: { temp }, weather: { 0: { description } }, wind: { speed, deg } } = props.weather;

    console.log({ name })
    const farenheitToCelsius = (farenheit) => {
        return ((farenheit - 32) * 5556)
    }

    const Celsius = farenheitToCelsius({ temp });

    const Direction = (deg) => {
        if (deg >= 345 && deg <= 30) {
            return 'N'
        } else if (deg > 90 && deg > 30) {
            return 'NE'
        } else if (deg >= 90 && deg <= 165) {
            return 'SE'
        } else if (deg > 165 && deg <= 195) {
            return 'S'
        } else if (deg > 195 && deg <= 255) {
            return 'SW'
        } else if (deg > 255 && deg <= 285) {
            return 'W'
        } else if (deg > 285 && deg < 345) {
            return 'NW'
        } else return 'Unknown direction'
    }

    const windDirection = Direction({ deg });


    return (
        <div className='styling'>
            <p>City: {name}</p>
            <p>Temperature: {temp}</p>
            <p>Sunrise time: {sunrise}</p>
            <p>Sunset time:  {sunset}</p>
            <p>Weather: {description}</p>
            <img src=' http://openweathermap.org/img/wn/10d@2x.png' />
            <p>Wind speed: {speed} km/h</p>
            <p>Wind direction: {deg} degree</p>
        </div>
    );
}

