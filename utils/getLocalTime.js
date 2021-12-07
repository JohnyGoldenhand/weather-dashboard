

export const getLocalTime = (localTime, shift) => {
    const currentTime = localTime * 1000;
    const currentShift = shift * 1000;
    console.log("LocalTime: ", localTime);
    const newTimestamp = currentTime + currentShift
    const date = new Date(newTimestamp);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();

    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime

}
