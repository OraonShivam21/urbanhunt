import { Routes, Route } from "react-router-dom"
import Admindash from "./Admindash"
import Login from "./Login"
import Signup from "./Signup"
import Home from "./Home"
import Dashboard from "./Dashboard"
import Addproduct from "./Addproduct"
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
        <Route path="/addproduct" element={ <Addproduct/> } />
      </Routes>
        </>
    )
}

export default Router