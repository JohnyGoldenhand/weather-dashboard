export const getWindDirection = (deg) => {
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