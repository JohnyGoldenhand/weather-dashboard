import { Card } from '../Card/Card';
import { convertTemperatureToCelsius, getWindDirection } from "../../utils";

export const Dashboard = ({ weather }) => (
    <>
        {
            weather.map((w) => <Card weather={w} />)
        }
    </>
);
