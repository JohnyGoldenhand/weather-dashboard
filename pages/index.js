import { Dashboard } from '../components/DashBoard/DashBoard'
import { fetchWeather } from '../utils';

export default function Home({ weather }) {
  return (
    <Dashboard weather={weather} />
  )
}




export async function getStaticProps() {
  const weatherLondon = await fetchWeather('London');
  const weatherPoznan = await fetchWeather('Poznan');
  const weatherHavana = await fetchWeather('Havana');

  return {
    props: {
      weather: [weatherLondon, weatherPoznan, weatherHavana]
    },
  }
}
