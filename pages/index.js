import Head from 'next/head';
import { useState, useEffect } from 'react';
import DataButton from '../components/dataButton';
import DisplayWeather from '../components/displayWeather';
import ContactLinks from '../components/contactLinks';

export default function Home() {

  const [zipCode, setZipCode] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  async function getData() {
    fetch(`/api/weather?zip=${zipCode}`)
      .then(response => response.json())
      .then(data => {
        if (data.weather.cod === 200) {
          setError(null);
          setWeatherData(data.weather);
        } else {
          throw data.weather.message;
        }
      })
      .catch(errorMessage => {
        setError(errorMessage);
        setWeatherData(null);
      })
  }
  function handleButton(e) {
    e.preventDefault();
    getData();
  }
 
  function handleChange(e) {
    setZipCode(e.target.value);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex py-7 justify-center bg-blue-300 w-screen">
        <div className="flex flex-col justify-center text-2xl"><a><img src="weather.svg" width="250" height="250"/></a></div>
      </header>
      <main className="flex flex-col pt-8 items-center justify-center w-full flex-1 text-center bg-blue-400">
        <div className="flex px-0">
          <input className="flex sm:px-4 lg:px-8 bg-red-50 text-center border-t-4 rounded-lg mr-3" placeholder="Enter zip code" value={zipCode} onChange={handleChange}></input>
          <DataButton handleClick={handleButton}/>
        </div>
        <DisplayWeather weatherData={weatherData} error={error}/>
      </main>
      <footer className="w-full items-center justify-center py-5 bg-blue-300">
        <ContactLinks/>
      </footer>
    </div>
  )
}
