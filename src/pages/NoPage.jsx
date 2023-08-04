import homeIcon from "../assets/home.svg"
import {NavLink, useNavigate} from "react-router-dom"
import goBackIcon from "../assets/go_back.svg"
function NoPage({err,page}) {
  let isLogin = window.sessionStorage.getItem("api-key") !== null
  const navigation = useNavigate()
  return (
    <div className="bg-blue-400 w-full h-screen flex justify-center items-center"> 
    <h1 className="text-white font-medium text-2xl"> <center><span className="text-6xl">404</span></center><br/> Page Not Found</h1>
    <div className="absolute right-4 bottom-4"><NavLink to={isLogin===true ? "/home" : "/login"} ><img className="invert-[1] hover:invert-0 duration-normal" width={48} height={48} src={homeIcon}/> </NavLink></div>
    <div className="text-white absolute bottom-5"><h3>{err}</h3>     {page!==null && <div onClick={()=>navigation(page) } className="w-30 h-10  flex items-center justify-center"><img width={48} height={48} className="invert-[1] hover:scale-110  duration-normal" src={goBackIcon}/>  </div>}   </div>
    </div>
  )
}

export default NoPage