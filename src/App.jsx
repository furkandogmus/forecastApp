import Login from './pages/Login'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {City} from './pages/City';

function App() {
  
  const value = window.sessionStorage.getItem("api-key")
  console.log(value)
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route path='/' element={value==null ? <Login/> : <Home />} />
        <Route path='/home' element={ <Home />} />
        <Route path="login" element={<Login />} />
        <Route path="city/:name" element={<City/>}/>
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
