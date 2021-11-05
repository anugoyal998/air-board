import dotenv from 'dotenv';
import Navbar from "./components/navbar/Navbar"
import Cookies from 'js-cookie'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setAuthAction } from './redux/actions/auth.action';


function App() {
  const dispatch = useDispatch()
  useEffect(()=> {
    if (Cookies.get("user")) {
      // setAuth(JSON.parse(Cookies.get("user")));
      dispatch(setAuthAction(JSON.parse(Cookies.get("user"))));
    }
  },[])
  return (
    <>
     <Navbar/> 
    </>
  )
}

export default App
