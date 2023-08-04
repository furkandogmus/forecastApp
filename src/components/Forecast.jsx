import React, { useEffect, useState } from 'react';
import Card from './Card';
import { getForecast } from '../service/GetForecast';

function Forecast({ city }) {
  const [loading, setLoading] = useState(true);
  const [props, setProps] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getForecast(city);
      
        const forecastProps = data.list.slice(0, 4).map((item) => ({
          feels_like: item.main.feels_like,
          date: item.dt_txt,
          temp: item.main.temp,
          city: data.city.name,
          description: item.weather[0].description,
        }));
        setProps(forecastProps);
        setLoading(false);
      } catch (error) {
        // Handle error if needed
        setLoading(false);
      }
    }
    
    fetchData();
  }, [city]);

  if (loading) {
    return <div className='text-2xl text-white font-medium'>Loading...</div>; // Display a loading indicator while fetching data
  }

  return (
    <div className='bg-blue-300 w-[80%] h-40 flex items-center rounded justify-around'>
      {props.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
}

export default Forecast;
