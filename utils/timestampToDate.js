import moment from 'moment';

export const timestampToDate = (timestamp, offset) => {
    const formattedTime = moment
        .utc(timestamp * 1000)
        .utcOffset(offset / 60)
        .format('HH:mm');

    return formattedTime;
};
