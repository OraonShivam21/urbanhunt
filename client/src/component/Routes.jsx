import { Routes, Route } from "react-router-dom"
import Admindash from "./Admindash"
import Login from "./Login"
import Signup from "./Signup"
import Home from "./Home"
import Dashboard from "./Dashboard"
function Router()
{
    return(
        <>
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/admindashboard" element={ <Admindash/> } />
        <Route path="/dashboard" element={ <Dashboard/> } />
      </Routes>
        </>
    )
}

export default Router