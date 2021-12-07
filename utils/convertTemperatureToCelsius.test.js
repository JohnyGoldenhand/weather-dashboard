import { convertTemperatureToCelsius } from './convertTemperatureToCelsius.js';

describe('Function convertTemperatureToCelsius', () => {
    test('Converts temperature from kelvins to celsius', () => {
        const temperatureInKelvins = 276.45;
        const convertedTemperature = convertTemperatureToCelsius(temperatureInKelvins);

        const expectedTemperatureInCelsius = 3;

        expect(convertedTemperature).toBe(expectedTemperatureInCelsius);
    });
});
