import { timestampToDate } from './timestampToDate.js';

describe('Function timestampToDate', () => {
    test('Converts timestamp to time format', () => {
        const timestamp = 1639181395;
        const offset = -18000;
        const convertedTimestamp = timestampToDate(timestamp, offset);

        expect(convertedTimestamp).toBe('19:09');
    });
});
