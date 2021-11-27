import { Dashboard } from '../components/DashBoard/DashBoard'

const Cities = ['Poznań', 'London', 'Havana']

export default function Home(props) {
  return (
    <Dashboard weather={props.weather} />
  )
}

const City = () => {
  for (city of Cities) {
    currentCity = city;
  }
}
let currentCity = ''

export async function getStaticProps() {

  const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=22ff7e60113550c97d4b37724204a051')
  const weather = await res.json()
  console.log(weather)

  return {
    props: {
      weather
    },
  }
}
