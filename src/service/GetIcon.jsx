import clear_sky from '../assets/weather_conditions/clear_sky.svg'
import drizzle from '../assets/weather_conditions/drizzle.svg'
import few_clouds from '../assets/weather_conditions/few_clouds.svg'
import mist from '../assets/weather_conditions/mist.svg'
import overcast_clouds from '../assets/weather_conditions/overcast_clouds.svg'
import rain from '../assets/weather_conditions/rain.svg'
import shower_rain from '../assets/weather_conditions/shower_rain.svg'
import snow from '../assets/weather_conditions/snow.svg'
import thunderstorm from '../assets/weather_conditions/thunderstorm.svg'

import React from 'react'

function GetIcon({name}) {
  let icon
  switch(name){
    case 'clear sky':
        icon = clear_sky
        break;
    case 'few clouds':
        icon = few_clouds
        break;
    case 'mist':
        icon = mist
        break;
    case 'snow':
        icon = snow
        break;
    case 'thunderstorm':
        icon = thunderstorm
        break;
    case 'rain':
        icon = rain
        break;
    case 'light rain':
        icon = rain
        break;
    
    
    case 'shower rain':
        icon= shower_rain
        break;
    case 'broken clouds':
        icon = overcast_clouds
        break;
    case 'scattered clouds':
        icon = drizzle
        break;
    default:
        break
  }
  
    return (
    <img width={48} height={48} src={icon}/> 
  )
}

export default GetIcon