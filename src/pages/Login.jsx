import { useEffect, useState } from "react"
import { validateApiKey } from "../service/ValidateApiKey";
import { useNavigate } from "react-router-dom";

function Login() {
  const [api,setApi] = useState(window.sessionStorage.getItem("api-key"));
  const navigate = useNavigate();
  useEffect(()=> {if(api!==null){
    alert('API is founded. Redirecting...')
    navigate("/home")
  }},[])
  

  const onClick = async (key) => {
    const result = await validateApiKey(key)
    if (result === true){
      window.sessionStorage.setItem("api-key",key)
      navigate("/home")
    }
    else {
      alert(`Hatali API KEY girdiniz.`)
    }
  }


  return (
    <div className='w-full h-screen bg-blue-400 text-white flex justify-center items-center flex-col gap-10'>
        <h1 className=' font-medium text-2xl'>Weather Forecast App</h1>
        <input onChange={(e) => setApi(e.target.value)} className='w-60 h-10 bg-blue-200 text-gray-primary focus:border-gray-primary border-2 border-blue-200 duration-normal outline-none pl-2 rounded' placeholder='Enter an api key'/>
        <button onClick={()=> onClick(api)} className='bg-blue-200 text-gray-primary px-4 py-1 rounded hover:bg-gray-primary hover:text-blue-200 duration-normal'>Login</button>
        <p className='text-xs text-center '>You can access the site by visiting <a className='underline hover:text-gray-primary font-semibold duration-fast' href='https://openweathermap.org/'>openweathermap.org</a> and <br/>obtain an API key</p>
    </div>
  )
}
export default Login