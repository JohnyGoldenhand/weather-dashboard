import { iconConvertion } from './iconConvertion.js';

describe('Function iconConvertion', () => {
    test('Creates icons url based on icon id', () => {
        const iconId = '03n';
        const convertedIconURL = iconConvertion(iconId);

        expect(convertedIconURL).toBe(`http://openweathermap.org/img/wn/${iconId}@2x.png`);
    });
});
