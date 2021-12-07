import { Card } from '../Card/Card';

export const Dashboard = ({ weather }) => (
    <>
        {
            weather.map((w) => <Card weather={w} />)
        }
    </>
);
