import Home from "./component/Home";
import Router from "./component/Routes"
import { Link } from 'react-router-dom';
import {useState,useContext } from "react";
import { authcontext } from "./context/authcontext";
function App()
{
  const [auth,setAuth]=useState(false)
  const [admin,setAdmin]=useState(false)
  const [token,setToken]=useState(null)
  return (
    <>
    <authcontext.Provider value={{auth,setAuth,admin,setAdmin,token,setToken}}>
    <Router/>
    </authcontext.Provider>
    </>
  )
}
export default App