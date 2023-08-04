import TurkeyMap from 'turkey-map-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCity } from './City';
import NoPage from './NoPage';

function Home() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  const navigateFunction = (e) => {
    setInputValue(e.target.value);
    const city = getCity(e.target.value);
    if (city !== null) {
      navigate(`../city/${city.name}`);
    }
  };
  const isLoggedIn = window.sessionStorage.getItem("api-key") !== null
  return  (isLoggedIn===true ? <div className='w-full h-screen bg-blue-400'>
  <h1 className='w-full text-center pt-5 font-medium text-3xl text-gray-primary'>Map of Türkiye</h1>
  <div className='w-full h-10 flex justify-center items-center'>
    <input
      placeholder='Enter city'
      value={inputValue}
      onChange={navigateFunction}
      className='bg-blue-200 text-gray-primary capitalize focus:border-gray-primary border-2 border-blue-200 duration-normal outline-none pl-2 rounded'
    />
  </div>
  <TurkeyMap onClick={(object) => handleClick(object, navigate, setInputValue)} />
</div> : 

  <NoPage err="Go to login page" page={`/login`} />

    
  );
}

export default Home;

async function handleClick(object, navigate, setInputValue) {
  await writeInput(object.name, setInputValue);
  navigate('../city/' + object.name.toLocaleLowerCase('tr'));
}

async function writeInput(text, setInputValue) {
  const inputField = document.querySelector('input');
  if (!inputField) return;
  
  setInputValue('');

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    setInputValue((prevValue) => prevValue + char);
    await delay(100); // Adjust typing speed here
  }
}
