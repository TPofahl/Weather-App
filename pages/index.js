import Head from 'next/head';
import { useState, useEffect } from 'react';
import DataButton from '../components/dataButton';
import DisplayWeather from '../components/displayWeather';

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
        console.log(errorMessage);
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
    <div className="flex flex-col items-center justify-center min-h-screen py-2 dark:bg-gray-800">
      <Head>
        <title>Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center bg-blue-300">

        <div className="flex flex-col justify-center text-9xl">Weather App</div>
        <div className="flex sm:grid-cols-2">
          <input className="flex px-8 bg-red-50 border-t-4 rounded-lg mr-3" placeholder="Enter zip code" value={zipCode} onChange={handleChange}></input>
          <DataButton handleClick={handleButton}/>
        </div>
        <DisplayWeather weatherData={weatherData} error={error}/>
      </main>
    </div>
  )
}
