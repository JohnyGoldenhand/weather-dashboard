export const convertTemperatureToCelsius = (kelvin) => {
    const celsius = Math.round(kelvin - 273.15)
    return celsius
}