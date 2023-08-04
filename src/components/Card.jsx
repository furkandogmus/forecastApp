import React from 'react'
import GetIcon from '../service/GetIcon'
import { toCapitalize } from '../pages/City'
function Card(props) {
    const {date,city,temp,feels_like,description} = props
    const dateObj = new Date(date);
    const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
         };

const formattedDate = dateObj.toLocaleString('en-US', options);


  return (
    <div className='bg-blue-400 relative h-[90%] rounded-lg text-white w-[23%]'>
        <div className='absolute left-4 top-2'><p className='text-sm hover:text-blue-500 duration-slow '>{formattedDate}</p><h3 className='hover:text-blue-500 duration-slow'>{city}, TR</h3></div>
        <div className='absolute left-0 bottom-0 w-full flex items- flex-col rounded-b-lg  bg-blue-600'>
            <div className='flex items-center'>
            <GetIcon name={description}/>
            <h3 className='hover:text-blue-900 duration-slow'>{temp}°C</h3>
            </div>
            
            <p className='text-[10px] text-start pb-2 pl-4 hover:text-blue-900 duration-slow'>Feels like {feels_like}°C. {toCapitalize(description)}.</p>
        </div>
    </div>
  )
}

export default Card