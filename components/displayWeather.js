export default function DisplayWeather({ weatherData, error }) {
  console.log("test", weatherData);
  if (weatherData === null) {return (<div>{error ? error : 'No weather data'}</div>)}
  return (
    <div className="bg-blue-500 pt-12 sm:pt-16 mt-6 rounded-xl shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Your Daily Forecast
          </h2>
          <p className="mt-3 text-xl text-gray-900 sm:mt-4">
            Data provided by the OpenWeather API
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 bg-blue-700 sm:pb-16 rounded-xl">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-blue-900" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">{weatherData.name}, {weatherData.sys.country}</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">City</dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">{weatherData.main.temp} F</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">Temp</dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">{weatherData.main.feels_like} F</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">Feels like</dd>
                </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">{weatherData.wind.speed} mph</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">Windspeed</dd>
              </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">{weatherData.main.humidity}%</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">Humidity</dd>
              </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">{weatherData.weather[0].description}</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">{weatherData.weather[0].main}</dd>
              </div>
              <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">{weatherData.main.temp_min} F</dt>
              <dd className="order-1 text-5xl font-extrabold text-indigo-600">Min</dd>
          </div>
              <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">{weatherData.main.temp_max} F</dt>
              <dd className="order-1 text-5xl font-extrabold text-indigo-600">Max</dd>
          </div>
              <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">{weatherData.main.pressure}</dt>
              <dd className="order-1 text-5xl font-extrabold text-indigo-600">Pressure</dd>
          </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
