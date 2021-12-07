import { getWindDirection } from './getWindDirection.js';

describe('Function getWindDirection', () => {
    test('Parses 30 degrees to N', () => {
        const windDirection = getWindDirection(30);

        expect(windDirection).toBe('N');
    });

    test('Parses 90 degrees to SE', () => {
        const windDirection = getWindDirection(90);

        expect(windDirection).toBe('SE');
    });

    test('Parses 250 degrees to N', () => {
        const windDirection = getWindDirection(250);

        expect(windDirection).toBe('SW');
    });

    test('Handles incorrect value to Unknown direction', () => {
        const windDirection = getWindDirection('string value');

        expect(windDirection).toBe('Unknown direction');
    });
});
