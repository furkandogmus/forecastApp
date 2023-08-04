import { useNavigate, useParams } from "react-router-dom"
import {cities} from "../service/Cities";
import NoPage from "./NoPage";
import goBackIcon from '../assets/go_back.svg'
import Forecast from "../components/Forecast";


function City() {
  const navigate = useNavigate()


  var {name} = useParams();


  name = toCapitalize(name)

  let cityInfo = getCity(name)
  let isExist = cityInfo==null ? false : true
  isExist = isExist & window.sessionStorage.getItem("api-key") !== null

  return (
    isExist ?
    <div className="bg-blue-400 flex w-full h-screen flex-col justify-around items-center">
      <div className="w-60 h-40 flex flex-col justify-center ">
        <h1 className="font-medium text-center text-4xl text-white hover:scale-110 duration-normal">{name}</h1>
        <h4 className="text-sm text-blue-200 font-light mt-4 text-center hover:scale-125 duration-normal">Nüfus: <span className="text-blue-100   hover:text-white duration-normal">{cityInfo.population}</span> </h4>
        <h4 className="text-sm text-blue-200 font-light mt-4 text-center hover:scale-125 duration-normal">Bölge: <span className="text-blue-100  hover:text-white duration-normal">{cityInfo.region}</span> </h4>
        </div>


      <div className="w-full h-10 flex items-center justify-center"><Forecast city={name}/></div>
      <div onClick={()=>navigate(-1) } className="w-40 h-10 flex items-center justify-center hover:cursor-pointer"><img width={48} height={48} className="invert-[1] hover:scale-110  duration-normal" src={goBackIcon}/></div>
    
    </div>
    :
    <NoPage/>
  )
}

function toCapitalize(str) {
  return str.charAt(0).toLocaleUpperCase('tr-TR') + str.slice(1).toLowerCase();
}
function getCity(name) {
  let i
  for(i=0;i<81;i++){
    if (toCapitalize(cities[i].name)===toCapitalize(name)){
      return cities[i]
      }
  }
  return null
}

export {City,getCity,toCapitalize}