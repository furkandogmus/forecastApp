import { getPosition } from './Cities';

export const getForecast = async (city) => {
  const key = sessionStorage.getItem('api-key');
  const cityInfo = getPosition(city);
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityInfo.latitude}&lon=${cityInfo.longitude}&appid=${key}&units=metric`;
 

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
